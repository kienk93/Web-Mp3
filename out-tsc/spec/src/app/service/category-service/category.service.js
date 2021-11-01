var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        //API LOCAL
        // private API_CATEGORY = environment.API_LOCAL+'category';
        //API SERVER
        this.API_CATEGORY = environment.API_SERVER + 'category';
    }
    CategoryService.prototype.createCategory = function (category) {
        return this.http.post(this.API_CATEGORY, category);
    };
    CategoryService.prototype.getPageCategory = function (request) {
        var params = request;
        return this.http.get(this.API_CATEGORY, { params: params });
    };
    CategoryService.prototype.searchCategory = function (request, search) {
        var params = request;
        var nameCategory = search;
        return this.http.get(this.API_CATEGORY + '/search/' + nameCategory, { params: params });
    };
    CategoryService.prototype.getListCategory = function () {
        return this.http.get(this.API_CATEGORY + '/list');
    };
    CategoryService.prototype.updateCategory = function (id, category) {
        return this.http.put(this.API_CATEGORY + "/" + id, category);
    };
    CategoryService.prototype.getCategoryById = function (id) {
        return this.http.get(this.API_CATEGORY + "/" + id);
    };
    var _a;
    CategoryService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//# sourceMappingURL=category.service.js.map