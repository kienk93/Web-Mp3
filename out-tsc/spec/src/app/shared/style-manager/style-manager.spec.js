import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { StyleManager } from './style-manager';
describe('StyleManager', function () {
    var styleManager;
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [StyleManager]
    }); });
    beforeEach(inject([StyleManager], function (sm) {
        styleManager = sm;
    }));
    afterEach(function () {
        var links = document.head.querySelectorAll('link');
        for (var _i = 0, _a = Array.prototype.slice.call(links); _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.className.includes('style-manager-')) {
                document.head.removeChild(link);
            }
        }
    });
    it('should add stylesheet to head', function () {
        styleManager.setStyle('test', 'test.css');
        var styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
    });
    it('should change existing stylesheet', function () {
        styleManager.setStyle('test', 'test.css');
        var styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
        styleManager.setStyle('test', 'new.css');
        expect(styleEl.href.endsWith('new.css')).toBe(true);
    });
    it('should remove existing stylesheet', function () {
        styleManager.setStyle('test', 'test.css');
        var styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
        styleManager.removeStyle('test');
        styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).toBeNull();
    });
});
//# sourceMappingURL=style-manager.spec.js.map