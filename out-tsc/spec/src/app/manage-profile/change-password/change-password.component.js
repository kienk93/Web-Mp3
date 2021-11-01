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
import { FormBuilder, Validators } from "@angular/forms";
import { ChangePassword } from "../../model/ChangePassword";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../service/token.service";
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
var ChangePasswordComponent = /** @class */ (function () {
    // data2: any = {
    //     message: "no"
    // };
    // data2: any = {};
    function ChangePasswordComponent(formBuilder, authService, router, tokenService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.status = 'Please fill in the form to change your password';
        this.form = {};
        this.matcher = new MyErrorStateMatcher();
        // matcher2 = new MyErrorStateMatcher2();
        this.isChangePassed = false;
        this.errorMessage = '';
        this.hide = true;
        this.data = {
            message: "yes"
        };
        // this.myForm = this.formBuilder.group({
        //         currentPassword: [''],
        //         newPassword: [''],
        //         confirmPassword: ['']
        //     }
        // );
        this.myForm = this.formBuilder.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['']
        }, { validator: this.checkPasswords });
        // this.myForm1 = this.formBuilder.group({
        //         // currentPassword: ['', [Validators.required]],
        //         newPassword: [''],
        //         confirmPassword: ['', [Validators.required]]
        //
        //     }, {validator: this.checkPasswords}
        // );
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePassWord = new ChangePassword(this.form.currentPassword, this.form.newPassword, this.form.confirmPassword);
    };
    ChangePasswordComponent.prototype.checkPasswords = function (group) {
        var newpass = group.controls.newPassword.value;
        var confirmPass = group.controls.confirmPassword.value;
        return newpass === confirmPass ? null : { notSame: true };
    };
    ChangePasswordComponent.prototype.ngSubmit = function () {
        var _this = this;
        this.authService
            .changePassword(this.changePassWord)
            .subscribe(function (data) {
            console.log('data', data);
            if (JSON.stringify(data) == JSON.stringify(_this.data)) {
                _this.isChangePassed = false;
                console.log('data trong if', data);
                console.log('ischangePass', _this.isChangePassed);
                // alert('Bạn đã thay đổi Mật Khẩu thành công');
                _this.status = 'Change Password success!';
            }
            else {
                _this.isChangePassed = true;
                console.log('xuong else');
                // alert('Mật khẩu không khớp')
            }
            // this.router.navigate(['/home']);
        }, function (error) {
            alert('khong duoc');
        });
    };
    var _a, _b;
    ChangePasswordComponent = __decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _a : Object, AuthService, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, TokenService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map