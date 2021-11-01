import { TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                BrowserAnimationsModule,
                RouterTestingModule,
                MatCardModule,
                MatPseudoCheckboxModule,
                NgxAudioPlayerModule
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should be able to click on player controls - display title', waitForAsync(function () {
        var input = fixture.debugElement.query(By.css('.ngx-player-display-title .mat-checkbox-input')).nativeElement;
        expect(input.checked).toBeTruthy();
        input.click();
        fixture.detectChanges();
        expect(input.checked).toBeFalsy();
    }));
    it('should be able to click on advanced player controls - display playlist', waitForAsync(function () {
        var input = fixture.debugElement.query(By.css('.mat-advanced-player-display-playlist .mat-checkbox-input')).nativeElement;
        expect(input.checked).toBeTruthy();
        input.click();
        fixture.detectChanges();
        expect(input.checked).toBeFalsy();
    }));
});
//# sourceMappingURL=home.component.spec.js.map