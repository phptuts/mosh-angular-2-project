import { Component } from '@angular/core';
import { NavBarComponent } from './navbar.component';
import { ROUTER_DIRECTIVES, Routes, RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home.component';
import { UserAddComponent } from './users/user-add.component';
import { NotFoundComponent } from './not-found.component';

@Routes([
  { path : '/users/new', component: UserAddComponent },
  { path : '/users/:id', component: UserAddComponent },
  { path : '/users', component: UsersComponent },
  { path : '/posts', component: PostsComponent },
  { path : '/not-found', component: NotFoundComponent },
  { path : '/', component: HomeComponent },
])
@Component({
  selector: 'my-app',
  template: `
        <navbar></navbar> 
        <div class="container">
          <router-outlet></router-outlet>
        </div>
`,
  directives: [NavBarComponent, ROUTER_DIRECTIVES, RouterOutlet, HomeComponent, UsersComponent, PostsComponent]
})

export class AppComponent { }
