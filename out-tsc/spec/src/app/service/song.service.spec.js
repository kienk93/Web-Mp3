import { TestBed } from '@angular/core/testing';
import { SongService } from './song.service';
describe('SongService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SongService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=song.service.spec.js.map