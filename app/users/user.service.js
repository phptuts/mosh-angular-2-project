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
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
            .map(function (response) {
            var data = response.json();
            var users = [];
            for (var i = 0; i < data.length; i += 1) {
                users.push(data[i]);
            }
            return users;
        });
    };
    UserService.prototype.save = function (user) {
        if (undefined === user.id) {
            var observable = this.http.post('http://jsonplaceholder.typicode.com/users', user);
        }
        else {
            var observable = this.http.put('http://jsonplaceholder.typicode.com/users/' + user.id, user);
        }
        return observable.map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.delete = function (user) {
        return this.http.delete('http://jsonplaceholder.typicode.com/users/' + user.id)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUser = function (id) {
        return this.getUsers()
            .map(function (users) {
            var user;
            for (var i = 0; i < users.length; i += 1) {
                if (users[i].id == id) {
                    user = users[i];
                }
            }
            return user;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map