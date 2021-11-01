import { ThemeStorage } from './theme-storage';
var testStorageKey = ThemeStorage.storageKey;
var testTheme = {
    primary: '#000000',
    accent: '#ffffff',
    name: 'test-theme'
};
describe('ThemeStorage Service', function () {
    var service = new ThemeStorage();
    var getCurrTheme = function () { return window.localStorage.getItem(testStorageKey); };
    var secondTestTheme = {
        primary: '#666666',
        accent: '#333333',
        name: 'other-test-theme'
    };
    beforeEach(function () {
        window.localStorage[testStorageKey] = testTheme.name;
    });
    afterEach(function () {
        window.localStorage.clear();
    });
    it('should set the current theme name', function () {
        expect(getCurrTheme()).toEqual(testTheme.name);
        service.storeTheme(secondTestTheme);
        expect(getCurrTheme()).toEqual(secondTestTheme.name);
    });
    it('should get the current theme name', function () {
        var theme = service.getStoredThemeName();
        expect(theme).toEqual(testTheme.name);
    });
    it('should clear the stored theme data', function () {
        expect(getCurrTheme()).not.toBeNull();
        service.clearStorage();
        expect(getCurrTheme()).toBeNull();
    });
    it('should emit an event when setTheme is called', function () {
        spyOn(service.onThemeUpdate, 'emit');
        service.storeTheme(secondTestTheme);
        expect(service.onThemeUpdate.emit).toHaveBeenCalled();
        expect(service.onThemeUpdate.emit).toHaveBeenCalledWith(secondTestTheme);
    });
});
//# sourceMappingURL=theme-storage.spec.js.map