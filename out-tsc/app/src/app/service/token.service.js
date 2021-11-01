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
var TOKEN_KEY = 'Token_Key';
var NAME_KEY = 'Name_Key';
var ROLE_KEY = 'Role_Key';
var AVATAR_KEY = 'Avatar_Key';
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.roles = [];
    }
    TokenService.prototype.setAvatar = function (avatar) {
        window.sessionStorage.removeItem(AVATAR_KEY);
        window.sessionStorage.setItem(AVATAR_KEY, avatar);
    };
    TokenService.prototype.getAvatar = function () {
        return window.sessionStorage.getItem(AVATAR_KEY);
    };
    TokenService.prototype.setToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenService.prototype.getToken = function () {
        return window.sessionStorage.getItem(TOKEN_KEY);
    };
    TokenService.prototype.setName = function (name) {
        window.sessionStorage.removeItem(NAME_KEY);
        window.sessionStorage.setItem(NAME_KEY, name);
    };
    TokenService.prototype.getName = function () {
        return window.sessionStorage.getItem(NAME_KEY);
    };
    TokenService.prototype.setRoles = function (roles) {
        window.sessionStorage.removeItem(ROLE_KEY);
        window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
    };
    TokenService.prototype.getRoles = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(function (role) {
                _this.roles.push(role.authority);
            });
        }
        return this.roles;
    };
    TokenService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());
export { TokenService };
//# sourceMappingURL=token.service.js.map