import { TestBed, waitForAsync } from '@angular/core/testing';
import { NavBarComponent, NavBarModule } from './nav-bar.component';
describe('NavBar', function () {
    var fixture;
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
            imports: [NavBarModule],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NavBarComponent);
        fixture.detectChanges();
    });
    // Note: Add tests as logic is added to navbar class.
});
//# sourceMappingURL=nav-bar.component.spec.js.map