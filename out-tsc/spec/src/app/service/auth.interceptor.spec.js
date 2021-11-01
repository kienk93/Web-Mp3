import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
describe('AuthInterceptor', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        providers: [
            AuthInterceptor
        ]
    }); });
    it('should be created', function () {
        var interceptor = TestBed.inject(AuthInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=auth.interceptor.spec.js.map