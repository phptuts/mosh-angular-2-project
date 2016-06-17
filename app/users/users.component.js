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
var user_service_1 = require('./user.service');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { _this.users = users; }, function (error) { console.log(error); });
    };
    UsersComponent.prototype.deleteUser = function (userToDelete) {
        var _this = this;
        this.userService.delete(userToDelete).subscribe(function (user) {
            _this.users = _this.users.filter(function (user) { return user.id != userToDelete.id; });
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/users/users.component.html',
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS],
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map