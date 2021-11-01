import { TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
// import {DocsAppTestingModule} from '../../testing/testing-module';
describe('Footer', function () {
    var fixture;
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
        // imports: [FooterModule, DocsAppTestingModule],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
    });
    it('should have a link to angular.io', function () {
        var link = fixture.nativeElement.querySelector('.docs-footer-logo a');
        var href = link.getAttribute('href');
        var text = link.textContent;
        expect(href).toContain('angular.io');
        expect(text).toContain('Learn Angular');
    });
});
//# sourceMappingURL=footer.component.spec.js.map