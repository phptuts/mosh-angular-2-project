import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: '<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>'
})
export class SpinnerComponent implements OnInit {

    @Input() visible : boolean;

    constructor() { }

    ngOnInit() { }

}