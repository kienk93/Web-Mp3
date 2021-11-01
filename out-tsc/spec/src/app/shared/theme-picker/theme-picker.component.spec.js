import { TestBed, waitForAsync } from '@angular/core/testing';
import { ThemePickerComponent, ThemePickerModule } from './theme-picker.component';
describe('ThemePicker', function () {
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
            imports: [ThemePickerModule],
        }).compileComponents();
    }));
    it('should install theme based on name', function () {
        var fixture = TestBed.createComponent(ThemePickerComponent);
        var component = fixture.componentInstance;
        var name = 'pink-bluegrey';
        spyOn(component.styleManager, 'setStyle');
        component.selectTheme(name);
        expect(component.styleManager.setStyle).toHaveBeenCalled();
        expect(component.styleManager.setStyle).toHaveBeenCalledWith('theme', "assets/" + name + ".css");
    });
});
//# sourceMappingURL=theme-picker.component.spec.js.map