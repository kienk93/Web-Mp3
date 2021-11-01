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
import { ChangeAvatar } from '../../model/ChangeAvatar';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';
var ChangeAvatarComponent = /** @class */ (function () {
    function ChangeAvatarComponent(authService, router, tokenStorageService) {
        this.authService = authService;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.form = {};
        this.data1 = {
            message: 'noavatar'
        };
        this.data2 = {
            message: 'yes'
        };
        this.status = 'Please Choose an image and click Upload';
        this.isChange = false;
    }
    ChangeAvatarComponent.prototype.ngOnInit = function () {
    };
    ChangeAvatarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.changeAvatar = new ChangeAvatar(this.form.avatar);
        this.authService.changeAvatar(this.changeAvatar).subscribe(function (data) {
            if (JSON.stringify(data) == JSON.stringify(_this.data1)) {
                _this.status = 'please upload Avatar!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.data2)) {
                _this.status = 'Successful Avatar upload!';
                _this.tokenStorageService.setAvatar(_this.form.avatar);
                // this.router.navigate(['user'])
                window.location.reload();
                // this.tokenStorageService.setAvatar(this.form.avatar)
            }
        }, function (error) {
            alert('change avatar failled!');
        });
    };
    ChangeAvatarComponent.prototype.onAvatar = function ($event) {
        this.isChange = true;
        this.form.avatar = $event;
    };
    var _a;
    ChangeAvatarComponent = __decorate([
        Component({
            selector: 'app-change-avatar',
            templateUrl: './change-avatar.component.html',
            styleUrls: ['./change-avatar.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, TokenService])
    ], ChangeAvatarComponent);
    return ChangeAvatarComponent;
}());
export { ChangeAvatarComponent };
//# sourceMappingURL=change-avatar.component.js.map