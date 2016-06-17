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
var navbar_component_1 = require('./navbar.component');
var router_1 = require('@angular/router');
var users_component_1 = require('./users/users.component');
var posts_component_1 = require('./posts/posts.component');
var home_component_1 = require('./home.component');
var user_add_component_1 = require('./users/user-add.component');
var not_found_component_1 = require('./not-found.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/users/new', component: user_add_component_1.UserAddComponent },
            { path: '/users/:id', component: user_add_component_1.UserAddComponent },
            { path: '/users', component: users_component_1.UsersComponent },
            { path: '/posts', component: posts_component_1.PostsComponent },
            { path: '/not-found', component: not_found_component_1.NotFoundComponent },
            { path: '/', component: home_component_1.HomeComponent },
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n        <navbar></navbar> \n        <div class=\"container\">\n          <router-outlet></router-outlet>\n        </div>\n",
            directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, home_component_1.HomeComponent, users_component_1.UsersComponent, posts_component_1.PostsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map