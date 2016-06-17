import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router, RouterOutlet, RouterLink, RouteSegment, UrlTree } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [RouterLink]
})
export class NavBarComponent implements OnInit {
    constructor(private router : Router) { }

    ngOnInit() { 
        
    }

    isActive(url: string) : boolean {
        return this.router.urlTree.contains(this.router.createUrlTree([url]));
    }

}