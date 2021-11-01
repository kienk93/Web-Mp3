var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { TestBed } from '@angular/core/testing';
import 'hammerjs';
import { AudioPlayerComponent } from './ngx-audio-player.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { SecondsToMinutesPipe } from '../../pipe/seconds-to-minutes';
import { FormsModule } from '@angular/forms';
import { mockPlaylist } from '../../model/track.model.mock';
import { ElementRef, Injectable, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxAudioPlayerModule } from '../../ngx-audio-player.module';
import { By } from '@angular/platform-browser';
var MockElementRef = /** @class */ (function () {
    function MockElementRef() {
    }
    MockElementRef = __decorate([
        Injectable()
    ], MockElementRef);
    return MockElementRef;
}());
export { MockElementRef };
var MockService = /** @class */ (function (_super) {
    __extends(MockService, _super);
    function MockService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playlist = mockPlaylist;
        return _this;
    }
    MockService = __decorate([
        Injectable()
    ], MockService);
    return MockService;
}(AudioPlayerService));
export { MockService };
describe('AudioPlayerComponent', function () {
    function createComponent(componentType, extraDeclarations) {
        if (extraDeclarations === void 0) { extraDeclarations = []; }
        TestBed.configureTestingModule({
            imports: [MatIconModule, MatSliderModule, MatCardModule, MatFormFieldModule, MatExpansionModule,
                MatPaginatorModule, MatTableModule, FormsModule, NgxAudioPlayerModule],
            declarations: __spreadArrays([componentType], extraDeclarations),
            providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
        }).compileComponents();
        return TestBed.createComponent(componentType);
    }
    var component;
    var fixture;
    describe('Component', function () {
        beforeEach((function () {
            var MATERIAL_MODULES = [
                MatCardModule,
                MatExpansionModule,
                MatFormFieldModule,
                MatPaginatorModule,
                MatSliderModule,
                MatTableModule
            ];
            TestBed.configureTestingModule({
                declarations: [AudioPlayerComponent, SecondsToMinutesPipe],
                imports: [
                    MatIconModule,
                    FormsModule,
                    MATERIAL_MODULES
                ],
                providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = TestBed.createComponent(AudioPlayerComponent);
            component = fixture.componentInstance;
            component.playlist = mockPlaylist;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
        it('should have play button', function () {
            var playButton = By.css('.play-track');
            expect(playButton).toBeDefined();
        });
        it('should select next song correctly', function () {
            component.nextSong();
            expect(component.currentIndex).toEqual(1);
            component.nextSong();
            expect(component.currentIndex).toEqual(2);
            component.nextSong();
            expect(component.currentIndex).toEqual(3);
            component.nextSong();
            expect(component.currentIndex).toEqual(0);
        });
        it('should select previous song correctly', function () {
            component.previousSong();
            expect(component.currentIndex).toEqual(3);
            component.previousSong();
            expect(component.currentIndex).toEqual(2);
            component.previousSong();
            expect(component.currentIndex).toEqual(1);
            component.previousSong();
            expect(component.currentIndex).toEqual(0);
        });
        it('should select track correctly', function () {
            component.selectTrack(2);
            expect(component.currentIndex).toEqual(1);
        });
    });
    describe('Advanced Audio Player', function () {
        beforeEach(function () {
            fixture = createComponent(AngularAudioPlayerApp);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
    });
    /** Test Ngx Player */
    var AngularAudioPlayerApp = /** @class */ (function () {
        function AngularAudioPlayerApp() {
            // Material Style Advance Audio Player Playlist
            this.msaapPlaylist = mockPlaylist;
            this.msaapDisplayTitle = true;
            this.msaapDisplayPlayList = true;
            this.pageSizeOptions = [2, 4, 6];
            this.msaapDisablePositionSlider = false;
            this.msaapDisplayVolumeControls = true;
        }
        AngularAudioPlayerApp = __decorate([
            Component({
                template: ""
            })
        ], AngularAudioPlayerApp);
        return AngularAudioPlayerApp;
    }());
});
//# sourceMappingURL=ngx-audio-player.component.spec.js.map