import { TestBed, waitForAsync } from '@angular/core/testing';
import { GettingStartedComponent } from './gettingstarted.component';
describe('GettingStartedComponent', function () {
    var component;
    var fixture;
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
            declarations: [GettingStartedComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gettingstarted.component.spec.js.map