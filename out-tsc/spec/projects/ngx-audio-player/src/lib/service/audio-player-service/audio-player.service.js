var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var AudioPlayerService = /** @class */ (function () {
    function AudioPlayerService() {
        // Dynamic update of playlist
        this.tracks = [];
        this.playlistSubject$ = new BehaviorSubject(this.tracks);
        // Get the current track
        this.currentTrack = null;
        this.currentTrackSubject$ = new BehaviorSubject(this.currentTrack);
        // Get the current time
        this.currentTime = null;
        this.currentTimeSubject$ = new BehaviorSubject(this.currentTime);
    }
    AudioPlayerService.prototype.setPlaylist = function (tracks) {
        this.tracks = tracks;
        this.playlistSubject$.next(this.tracks);
    };
    AudioPlayerService.prototype.getPlaylist = function () {
        return this.playlistSubject$.asObservable();
    };
    AudioPlayerService.prototype.setCurrentTrack = function (currentTrack) {
        this.currentTrack = currentTrack;
        this.currentTrackSubject$.next(this.currentTrack);
    };
    AudioPlayerService.prototype.getCurrentTrack = function () {
        return this.currentTrackSubject$.asObservable();
    };
    AudioPlayerService.prototype.setCurrentTime = function (currentTime) {
        this.currentTime = currentTime;
        this.currentTimeSubject$.next(this.currentTime);
    };
    AudioPlayerService.prototype.getCurrentTime = function () {
        return this.currentTimeSubject$.asObservable();
    };
    AudioPlayerService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AudioPlayerService);
    return AudioPlayerService;
}());
export { AudioPlayerService };
//# sourceMappingURL=audio-player.service.js.map