"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var post_service_1 = require('./post.service');
var user_service_1 = require('../users/user.service');
var spinner_component_1 = require('../shared/spinner.component');
var pagination_component_1 = require('../shared/pagination.component');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var PostsComponent = (function () {
    function PostsComponent(postService, userService) {
        this.postService = postService;
        this.userService = userService;
        this.posts = [];
        this.items = [];
        this.users = [];
        this.isLoading = false;
        this.pageSize = 2;
        this.paginationEvents = new core_1.EventEmitter();
        this.isLoadingComment = false;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var observable = Rx_1.Observable
            .forkJoin(this.postService.get(), this.userService.getUsers())
            .subscribe(function (json) {
            _this.isLoading = false;
            _this.posts = json[0];
            _this.items = _.take(_this.posts, _this.pageSize);
            _this.users = json[1];
        });
    };
    PostsComponent.prototype.selectPost = function (post) {
        var _this = this;
        this.isLoadingComment = true;
        this.selectedPost = post;
        this.postService
            .comments(post.id)
            .subscribe(function (comments) {
            _this.selectedPost.comments = comments;
        }, function (error) { return console.log(error); }, function () { _this.isLoadingComment = false; });
    };
    PostsComponent.prototype.changePage = function (pageNumber) {
        // console.log(pageNumber);
        var page = pageNumber - 1;
        var start = page * this.pageSize;
        // let end = (page * this.pageSize) + (this.pageSize);
        // this.items = this.posts.slice(start, end);
        this.items = _.take(_.rest(this.posts, start), this.pageSize);
    };
    PostsComponent.prototype.onUserSelected = function (userId) {
        var _this = this;
        this.posts = [];
        this.isLoading = true;
        var observable;
        if ("" == userId) {
            observable = this.postService.get();
        }
        else {
            observable = this.postService.getUserPost(userId);
        }
        observable.subscribe(function (posts) {
            _this.posts = posts;
            _this.changePage(1);
            _this.isLoading = false;
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/posts/post.component.html',
            directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
            styles: ["\n    .posts\tli\t{\tcursor:\tdefault;\t}\n    .posts\tli:hover\t{\tbackground:\t#ecf0f1;\t}\t\n    .list-group-item.active,\t\n    .list-group-item.active:hover,\t\n    .list-group-item.active:focus\t{\t\n        background-color:\t#ecf0f1;\n        border-color:\t#ecf0f1;\t\n        color:\t#2c3e50;\n    }\n    "],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map