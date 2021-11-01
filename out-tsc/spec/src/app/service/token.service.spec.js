import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';
describe('TokenService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TokenService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=token.service.spec.js.map