var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { TokenService } from "../../service/token.service";
import { SignInForm } from "../../model/SignInForm";
import { Router } from "@angular/router";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenService, router) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.router = router;
        this.status = 'Please fill in the form to LOGIN -->';
        this.status1 = '';
        this.form = {};
        this.hide = true;
        this.isLogin = false;
        this.check = false;
        // this.authService.getOption();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.getData()) {
            this.check = true;
        }
    };
    LoginComponent.prototype.ngSubmit = function () {
        var _this = this;
        this.signInForm = new SignInForm(this.form.username, this.form.password);
        this.authService.signIn(this.signInForm).subscribe(function (data) {
            if (data.token != undefined) {
                _this.tokenService.setToken(data.token);
                _this.tokenService.setName(data.name);
                _this.tokenService.setRoles(data.roles);
                _this.tokenService.setAvatar(data.avatar);
                _this.router.navigate(['user-account']).then(function () {
                    window.location.reload();
                });
            }
            else {
                _this.isLogin = true;
                _this.status = 'Login Failed! Please try again!';
            }
        });
    };
    var _a;
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        __metadata("design:paramtypes", [AuthService,
            TokenService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map