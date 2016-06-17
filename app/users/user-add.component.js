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
var common_1 = require('@angular/common');
var EmailValidator_1 = require('../shared/EmailValidator');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var user_service_1 = require('./user.service');
var user_1 = require('./user');
var UserAddComponent = (function () {
    function UserAddComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.ignoreDirtyCheck = false;
        this.isNew = true;
        this.userModel = new user_1.User();
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.addUserForm = this.fb.group({
            user: this.fb.group({
                name: ['', common_1.Validators.required],
                email: ['', common_1.Validators.compose([
                        common_1.Validators.required,
                        EmailValidator_1.EmailValidator.validateEmail
                    ])],
                phone: [''],
            }),
            address: this.fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipCode: ['']
            })
        });
    };
    UserAddComponent.prototype.routerCanDeactivate = function (currTree, futureTree) {
        if (!this.ignoreDirtyCheck) {
            return Promise.resolve(confirm("You will lose the work you have done, are you sure?"));
        }
        return Promise.resolve(true);
    };
    UserAddComponent.prototype.routerOnActivate = function (curr, prev, currTree, prevTree) {
        var _this = this;
        var id = curr.getParamAsNumber('id');
        this.isNew = isNaN(id);
        if (!this.isNew) {
            this.userService.getUser(id).subscribe(function (user) {
                if (undefined == user) {
                    _this.ignoreDirtyCheck = true;
                    _this.router.navigate(['/not-found']);
                    return;
                }
                _this.userModel = user;
            });
        }
    };
    UserAddComponent.prototype.submitUser = function () {
        var _this = this;
        this.userService.save(this.userModel).subscribe(function (x) {
            _this.ignoreDirtyCheck = true;
            _this.router.navigate(['/users']);
        });
    };
    UserAddComponent = __decorate([
        core_1.Component({
            selector: 'user-add',
            templateUrl: 'app/users/user-add.component.html',
            providers: [common_1.FormBuilder, user_service_1.UserService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_1.Router])
    ], UserAddComponent);
    return UserAddComponent;
}());
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=user-add.component.js.map