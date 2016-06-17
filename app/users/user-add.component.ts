import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { EmailValidator } from '../shared/EmailValidator';
import { CanDeactivate, RouteTree, RouteSegment, Router, OnActivate } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'user-add',
    templateUrl : 'app/users/user-add.component.html',
    providers: [ FormBuilder, UserService, HTTP_PROVIDERS ] 
})
export class UserAddComponent implements OnInit, CanDeactivate, OnActivate {

    addUserForm : ControlGroup;

    ignoreDirtyCheck: boolean = false;

    isNew : boolean = true;

    userModel : User = new User();

    constructor(protected fb : FormBuilder, protected userService : UserService, protected router : Router) { }

    ngOnInit() { 
        this.addUserForm = this.fb.group({
            user: this.fb.group({
                name: ['', Validators.required],
                email: ['', Validators.compose([
                        Validators.required,
                        EmailValidator.validateEmail 
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
    }

    routerCanDeactivate(currTree?: RouteTree, futureTree?: RouteTree) : Promise<Boolean> {
        if(!this.ignoreDirtyCheck) {
            return Promise.resolve<Boolean>(confirm("You will lose the work you have done, are you sure?"));
        }
        return Promise.resolve<Boolean>(true);
    }

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree) {
        let id : number = curr.getParamAsNumber('id');
        this.isNew = isNaN(id);
        if(!this.isNew) {
                this.userService.getUser(id).subscribe(user => {
                if(undefined == user) {
                    this.ignoreDirtyCheck = true;
                    this.router.navigate(['/not-found']);
                    return;
                }
                this.userModel = user
            });
        }
    }

    submitUser() {
        this.userService.save(this.userModel).subscribe(x => {
            this.ignoreDirtyCheck = true;
            this.router.navigate(['/users']);
        });
    }

}