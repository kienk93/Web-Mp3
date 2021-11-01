import { TestBed } from '@angular/core/testing';
import { SingerService } from './singer.service';
describe('SingerService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SingerService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=singer.service.spec.js.map