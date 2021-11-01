var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ThemePickerModule } from '../theme-picker';
import { ThemeStorage } from '../theme-picker/theme-storage/theme-storage';
import { StyleManager } from '../style-manager';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from "../../service/token.service";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(tokenService) {
        this.tokenService = tokenService;
        this.isLogin = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        console.log('token ==> ', this.tokenService.getToken());
        if (this.tokenService.getToken()) {
            this.name = this.tokenService.getName();
            this.isLogin = true;
            this.avatar = this.tokenService.getAvatar();
        }
    };
    NavBarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
        }),
        __metadata("design:paramtypes", [TokenService])
    ], NavBarComponent);
    return NavBarComponent;
}());
export { NavBarComponent };
var NavBarModule = /** @class */ (function () {
    function NavBarModule() {
    }
    NavBarModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                MatButtonModule,
                MatMenuModule,
                RouterModule,
                ThemePickerModule,
                MatIconModule,
                MatFormFieldModule,
            ],
            exports: [NavBarComponent],
            declarations: [NavBarComponent],
            providers: [StyleManager, ThemeStorage]
        })
    ], NavBarModule);
    return NavBarModule;
}());
export { NavBarModule };
//# sourceMappingURL=nav-bar.component.js.map