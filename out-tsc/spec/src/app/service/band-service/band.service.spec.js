import { TestBed } from '@angular/core/testing';
import { BandService } from './band.service';
describe('BandService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BandService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=band.service.spec.js.map