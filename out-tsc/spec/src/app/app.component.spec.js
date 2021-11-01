import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', function () {
    beforeEach(waitForAsync(function () {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule],
            providers: []
        }).compileComponents();
    }));
    it('should create the ngx-audio-player-demo', waitForAsync(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have title as 'ngx-audio-player-demo'", waitForAsync(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('ngx-audio-player-demo');
    }));
});
//# sourceMappingURL=app.component.spec.js.map