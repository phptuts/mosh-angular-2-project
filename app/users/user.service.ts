import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http : Http) {

    }

    getUsers() {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
                .map(response => {
                   let data = response.json();
                   let users : User[] = [];
                   for(let i = 0; i < data.length; i += 1) {
                       users.push(data[i]);
                   } 
                   return users;
                });
    }   

    save(user : User) {
        if(undefined === user.id) {
            var observable = this.http.post('http://jsonplaceholder.typicode.com/users', user)        
        } 
        else {
            var observable = this.http.put('http://jsonplaceholder.typicode.com/users/' + user.id, user)        
        }
        return observable.map(response => {
                        return response.json();
        });
        
    }

    delete(user: User) {
         return this.http.delete('http://jsonplaceholder.typicode.com/users/' + user.id)
            .map(response => { return response.json() });       
    }

    getUser(id : number) {
        return this.getUsers()
                .map(users => {
                    let user : User;
                    for(let i = 0; i < users.length; i += 1) {
                        if(users[i].id == id) {
                            user = users[i];
                        }
                    }
                    return user;
                });
    }

}