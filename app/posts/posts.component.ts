import { Component, OnInit, EventEmitter } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';
import { Post } from './post';
import { User } from '../users/user';
import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationComponent } from '../shared/pagination.component';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/post.component.html',
    directives: [SpinnerComponent, PaginationComponent], 
    styles:[`
    .posts	li	{	cursor:	default;	}
    .posts	li:hover	{	background:	#ecf0f1;	}	
    .list-group-item.active,	
    .list-group-item.active:hover,	
    .list-group-item.active:focus	{	
        background-color:	#ecf0f1;
        border-color:	#ecf0f1;	
        color:	#2c3e50;
    }
    `],
    providers: [PostService, HTTP_PROVIDERS, UserService]
})
export class PostsComponent implements OnInit {

    posts: Post[] = [];

    items: Post[] = [];

    users: User[] = [];

    isLoading : boolean = false;

    pageSize : number = 2;

    paginationEvents : EventEmitter<number> = new EventEmitter<number>();

    isLoadingComment : boolean = false;

    selectedPost : Post;

    constructor(protected postService : PostService, protected userService : UserService) { }

    ngOnInit() { 
        this.isLoading = true;
        var observable =  Observable
                            .forkJoin(this.postService.get(), this.userService.getUsers() )
                            .subscribe(json => {
                                    this.isLoading = false;
                                    this.posts = json[0];
                                    this.items = _.take(this.posts, this.pageSize);
                                    this.users = json[1];
                            });
    }

    selectPost(post : Post) {
        this.isLoadingComment = true;
        this.selectedPost = post;

        this.postService
            .comments(post.id)
            .subscribe(comments => {
                this.selectedPost.comments = comments;
            }, error => console.log(error), () => {this.isLoadingComment = false;});
    }

    changePage(pageNumber) {
        // console.log(pageNumber);
         let page = pageNumber - 1;
         let start = page * this.pageSize;
        // let end = (page * this.pageSize) + (this.pageSize);
        // this.items = this.posts.slice(start, end);
        this.items = _.take(_.rest(this.posts, start), this.pageSize);
    }

    onUserSelected(userId) {
        this.posts = [];
        this.isLoading = true;
        let observable;
        if("" == userId) {
           observable =  this.postService.get()
        }
        else {
            observable = this.postService.getUserPost(userId)   
        }
        observable.subscribe(posts =>  {
            this.posts = posts; 
            this.changePage(1);
            this.isLoading = false;
        });
    }



}