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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageSelectedEvent = new core_1.EventEmitter();
        this.selectedPage = 1;
        this.items = [];
    }
    PaginationComponent.prototype.isVisible = function () {
        return this.getPageArray().length > 1;
    };
    PaginationComponent.prototype.getPageArray = function () {
        var totalPages = Math.ceil(this.items.length / this.pageSize);
        var pages = [];
        for (var i = 1; i <= totalPages; i += 1) {
            pages.push(i);
        }
        return pages;
    };
    PaginationComponent.prototype.ngOnInit = function () { };
    PaginationComponent.prototype.changePage = function (page) {
        this.selectedPage = page;
        this.pageSelectedEvent.emit(this.selectedPage);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageSelectedEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "selectedPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: 'app/shared/pagination.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map