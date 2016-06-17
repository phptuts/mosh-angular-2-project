import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { UserAddComponent } from './user-add.component';
import { ROUTER_DIRECTIVES, Routes, RouterLink } from '@angular/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UserService, HTTP_PROVIDERS],
    directives: [RouterLink]
})
export class UsersComponent implements OnInit {

    users : User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() { 
        this.userService.getUsers().subscribe(
            users =>  { this.users = users; },
            error => { console.log(error) }
        );
    }

    deleteUser(userToDelete :User) {
        this.userService.delete(userToDelete).subscribe(user => {
            this.users = this.users.filter(user => user.id != userToDelete.id);
        });
    }

}