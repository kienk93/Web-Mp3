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
import { environment } from "../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //API_LOCAL
        //   private API_SIGNUP = environment.API_LOCAL+'signup';
        // private API_SIGNIN = environment.API_LOCAL+'signin';
        // private API_CHANGE_PASSWORD = environment.API_LOCAL + 'change-password';
        // private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';
        //API SERVER
        this.API_SIGNIN = environment.API_SERVER + 'signin';
        this.API_SIGNUP = environment.API_SERVER + 'signup';
        this.API_CHANGE_PASSWORD = environment.API_SERVER + 'change-password';
        this.API_CHANGE_AVATAR = environment.API_SERVER + 'change-avatar';
    }
    AuthService.prototype.signUp = function (signUp) {
        return this.http.post(this.API_SIGNUP, signUp);
    };
    AuthService.prototype.signIn = function (signIn) {
        return this.http.post(this.API_SIGNIN, signIn);
    };
    AuthService.prototype.changePassword = function (info) {
        return this.http.put(this.API_CHANGE_PASSWORD, info);
    };
    AuthService.prototype.changeAvatar = function (info) {
        return this.http.put(this.API_CHANGE_AVATAR, info);
    };
    AuthService.prototype.setData = function (data) {
        this.data = data;
    };
    AuthService.prototype.getData = function () {
        return this.data;
    };
    var _a;
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map