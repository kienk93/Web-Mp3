var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, EventEmitter } from '@angular/core';
var ThemeStorage = /** @class */ (function () {
    function ThemeStorage() {
        this.onThemeUpdate = new EventEmitter();
    }
    ThemeStorage_1 = ThemeStorage;
    ThemeStorage.prototype.storeTheme = function (theme) {
        try {
            window.localStorage[ThemeStorage_1.storageKey] = theme.name;
        }
        catch (_a) { }
        this.onThemeUpdate.emit(theme);
    };
    ThemeStorage.prototype.getStoredThemeName = function () {
        try {
            return window.localStorage[ThemeStorage_1.storageKey] || null;
        }
        catch (_a) {
            return null;
        }
    };
    ThemeStorage.prototype.clearStorage = function () {
        try {
            window.localStorage.removeItem(ThemeStorage_1.storageKey);
        }
        catch (_a) { }
    };
    var ThemeStorage_1;
    ThemeStorage.storageKey = 'docs-theme-storage-current-name';
    ThemeStorage = ThemeStorage_1 = __decorate([
        Injectable()
    ], ThemeStorage);
    return ThemeStorage;
}());
export { ThemeStorage };
//# sourceMappingURL=theme-storage.js.map