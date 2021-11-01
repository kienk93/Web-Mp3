var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, } from '@angular/core';
import { StyleManager } from '../style-manager';
import { ThemeStorage } from './theme-storage/theme-storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { LiveAnnouncer } from '@angular/cdk/a11y';
var ThemePickerComponent = /** @class */ (function () {
    function ThemePickerComponent(styleManager, _themeStorage, _activatedRoute, liveAnnouncer, iconRegistry, sanitizer) {
        this.styleManager = styleManager;
        this._themeStorage = _themeStorage;
        this._activatedRoute = _activatedRoute;
        this.liveAnnouncer = liveAnnouncer;
        this._queryParamSubscription = Subscription.EMPTY;
        // The below colors need to align with the themes defined in theme-picker.scss
        this.themes = [
            {
                primary: '#673AB7',
                accent: '#FFC107',
                displayName: 'Deep Purple & Amber',
                name: 'deeppurple-amber',
                isDark: false,
            },
            {
                primary: '#3F51B5',
                accent: '#E91E63',
                displayName: 'Indigo & Pink',
                name: 'indigo-pink',
                isDark: false,
                isDefault: true,
            },
            {
                primary: '#E91E63',
                accent: '#607D8B',
                displayName: 'Pink & Blue-grey',
                name: 'pink-bluegrey',
                isDark: true,
            },
            {
                primary: '#9C27B0',
                accent: '#4CAF50',
                displayName: 'Purple & Green',
                name: 'purple-green',
                isDark: true,
            },
        ];
        iconRegistry.addSvgIcon('theme-example', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/theme-demo-icon.svg'));
        var themeName = this._themeStorage.getStoredThemeName();
        if (themeName) {
            this.selectTheme(themeName);
        }
    }
    ThemePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._queryParamSubscription = this._activatedRoute.queryParamMap
            .pipe(map(function (params) { return params.get('theme'); }))
            .subscribe(function (themeName) {
            if (themeName) {
                _this.selectTheme(themeName);
            }
        });
    };
    ThemePickerComponent.prototype.ngOnDestroy = function () {
        this._queryParamSubscription.unsubscribe();
    };
    ThemePickerComponent.prototype.selectTheme = function (themeName) {
        var theme = this.themes.find(function (currentTheme) { return currentTheme.name === themeName; });
        if (!theme) {
            return;
        }
        this.currentTheme = theme;
        if (theme.isDefault) {
            this.styleManager.removeStyle('theme');
        }
        else {
            this.styleManager.setStyle('theme', "assets/" + theme.name + ".css");
        }
        if (this.currentTheme) {
            this.liveAnnouncer.announce(theme.displayName + " theme selected.", 'polite', 3000);
            this._themeStorage.storeTheme(this.currentTheme);
        }
    };
    var _a, _b, _c, _d;
    ThemePickerComponent = __decorate([
        Component({
            selector: 'app-theme-picker',
            templateUrl: 'theme-picker.component.html',
            styleUrls: ['theme-picker.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [StyleManager,
            ThemeStorage, typeof (_a = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof LiveAnnouncer !== "undefined" && LiveAnnouncer) === "function" ? _b : Object, typeof (_c = typeof MatIconRegistry !== "undefined" && MatIconRegistry) === "function" ? _c : Object, typeof (_d = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" ? _d : Object])
    ], ThemePickerComponent);
    return ThemePickerComponent;
}());
export { ThemePickerComponent };
var ThemePickerModule = /** @class */ (function () {
    function ThemePickerModule() {
    }
    ThemePickerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
                MatTooltipModule,
            ],
            exports: [ThemePickerComponent],
            declarations: [ThemePickerComponent],
            providers: [StyleManager, ThemeStorage],
        })
    ], ThemePickerModule);
    return ThemePickerModule;
}());
export { ThemePickerModule };
//# sourceMappingURL=theme-picker.component.js.map