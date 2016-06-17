import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/shared/pagination.component.html'
})
export class PaginationComponent implements OnInit {

    @Output() pageSelectedEvent = new EventEmitter();

    isVisible() : boolean {
        return this.getPageArray().length > 1;
    }

    getPageArray() : number[] {
        let totalPages = Math.ceil(this.items.length / this.pageSize);
        let pages = [];
        for(let i = 1; i <= totalPages; i += 1) {
            pages.push(i);
        }
        return pages;
    }

    @Output() selectedPage : number = 1;

    @Input() items = [];

    @Input() pageSize : number;

    constructor() { }

    ngOnInit() { }

    changePage(page) {
        this.selectedPage = page;
        this.pageSelectedEvent.emit(this.selectedPage);
    }
}