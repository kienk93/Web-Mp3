import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
describe('CategoryService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoryService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=category.service.spec.js.map