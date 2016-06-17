import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    constructor(protected http: Http) {

    }

    get() : Observable<Post[]> {
       return  this.http.get('http://jsonplaceholder.typicode.com/posts').map(response => response.json());
    }

    comments(postId : number) : Observable<Comment[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
                    .map(response => response.json());
    }

    getUserPost(userId : number) {
        return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=' + userId)
                    .map(response => response.json());
    }

}