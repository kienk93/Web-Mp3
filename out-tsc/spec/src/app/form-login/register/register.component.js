var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { SignUpForm } from "../../model/SignUpForm";
import { Router } from "@angular/router";
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.status = 'Please fill in the form to register';
        this.form = {};
        this.hide = true;
        this.isCheckSuccess = false;
        this.error1 = {
            message: "nouser"
        };
        this.error2 = {
            message: "noemail"
        };
        this.success = {
            message: "yes"
        };
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngSubmit = function () {
        var _this = this;
        this.signUpForm = new SignUpForm(this.form.name, this.form.username, this.form.email, this.form.password);
        console.log('signUpForm === ', this.signUpForm);
        this.authService.signUp(this.signUpForm).subscribe(function (data) {
            console.log('data == ', data);
            if (JSON.stringify(data) == JSON.stringify(_this.error1)) {
                _this.status = 'The username is existed! Please try again!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.error2)) {
                _this.status = 'The email is existed! Please try again!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.success)) {
                _this.status = 'Create User account success -->';
                _this.isCheckSuccess = true;
                // this.isSuccess = 'Create User account success! Please Login!'
                // this.router.navigate(['login']);
                // this.isCheck = true;
                // this.authService.setOption(this.isCheck);
                _this.authService.setData(true);
                _this.router.navigate(['login']);
            }
        });
    };
    var _a;
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isCheck", void 0);
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map