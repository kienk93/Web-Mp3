var _a, _b, _c, _d;
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, Output, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { Subject } from 'rxjs';
let AudioPlayerComponent = class AudioPlayerComponent {
    constructor(elem) {
        this.repeat = 'all';
        this.dataSource = new MatTableDataSource();
        this.tracks = [];
        this.displayTitle = true;
        this.displayPlaylist = true;
        this.displayVolumeControls = true;
        this.displayRepeatControls = true;
        this.pageSizeOptions = [10, 20, 30];
        this.expanded = true;
        this.autoPlay = false;
        this.disablePositionSlider = false;
        this.displayArtist = false;
        this.displayDuration = false;
        // Support for internationalization
        this.tableHeader = 'Playlist';
        this.titleHeader = 'Title';
        this.artistHeader = 'Artist';
        this.durationHeader = 'Duration';
        this.currentIndex = 0;
        this.trackEnded = new Subject();
        this.iOS = (/iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
        this.startOffsetValue = 0;
        this.endOffset = 0;
        if (elem.nativeElement.tagName.toLowerCase() === 'mat-advanced-audio-player') {
            console.warn(`'mat-advanced-audio-player' selector is deprecated; use 'ngx-audio-player' instead.`);
        }
        this.audioPlayerService = new AudioPlayerService();
    }
    set playlist(playlist) {
        this.audioPlayerService.setPlaylist(playlist);
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    set startOffset(seconds) {
        this.startOffsetValue = seconds;
        this.player.nativeElement.currentTime = seconds;
    }
    get startOffset() {
        return this.startOffsetValue;
    }
    currTimePosChanged(event) {
        this.player.nativeElement.currentTime = event.value;
    }
    bindPlayerEvent() {
        this.player.nativeElement.addEventListener('playing', () => {
            this.isPlaying = true;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
            // BUG: Commenting for `ended` event not firing #66
            // if (this.currentTime >= this.duration - this.endOffset) {
            //     this.player.nativeElement.pause();
            // }
        });
        this.player.nativeElement.addEventListener('volume', () => {
            this.volume = Math.floor(this.player.nativeElement.volume);
        });
        if (!this.iOS) {
            this.player.nativeElement.addEventListener('loadstart', () => {
                this.loaderDisplay = true;
            });
        }
        this.player.nativeElement.addEventListener('loadedmetadata', () => {
            this.loaderDisplay = false;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('ended', () => {
            this.trackEnded.next('ended');
        });
    }
    playBtnHandler() {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.currentTime = this.startOffset;
            }
            else {
                this.player.nativeElement.currentTime = this.currentTime;
            }
            this.player.nativeElement.play();
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    }
    play(track) {
        if (track) {
            this.startOffset = track.startOffset || 0;
            this.endOffset = track.endOffset || 0;
        }
        setTimeout(() => {
            this.player.nativeElement.play();
        }, 50);
    }
    toggleVolume() {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    }
    toggleRepeat() {
        if (this.repeat === 'none') {
            this.repeat = 'all';
        }
        else if (this.repeat === 'all') {
            if (this.tracks.length > 1) {
                this.repeat = 'one';
            }
            else {
                this.repeat = 'none';
            }
        }
        else if (this.repeat === 'one' && this.tracks.length > 1) {
            this.repeat = 'none';
        }
    }
    setVolume(vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    }
    ngOnInit() {
        this.bindPlayerEvent();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', () => {
            if (this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                if (this.repeat === 'all') {
                    this.nextSong();
                }
                else if (this.repeat === 'one') {
                    this.play();
                }
                else if (this.repeat === 'none') {
                    // Do nothing
                }
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.audioPlayerService.setCurrentTime(this.player.nativeElement.currentTime);
        });
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(tracks => {
            if (tracks !== null && tracks !== []) {
                this.tracks = tracks;
                this.initialize();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('displayArtist') || changes.hasOwnProperty('displayDuration')) {
            this.buildDisplayedColumns();
        }
    }
    buildDisplayedColumns() {
        this.displayedColumns = ['title'];
        if (this.displayArtist) {
            this.displayedColumns.push('artist');
        }
        if (this.displayDuration) {
            this.displayedColumns.push('duration');
        }
        this.displayedColumns.push('status');
    }
    initialize() {
        this.buildDisplayedColumns();
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentTrack();
        if (this.autoPlay) {
            this.play();
        }
    }
    setDataSourceAttributes() {
        let index = 1;
        if (this.tracks) {
            this.tracks.forEach((track) => {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    }
    nextSong() {
        if (this.displayPlaylist === true
            && (((this.currentIndex + 1) % this.paginator.pageSize) === 0
                || (this.currentIndex + 1) === this.paginator.length)) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            }
            else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        if ((this.currentIndex + 1) >= this.tracks.length) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
        this.updateCurrentTrack();
        this.play();
    }
    previousSong() {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (this.displayPlaylist === true
                && (((this.currentIndex) % this.paginator.pageSize) === 0
                    || (this.currentIndex === 0))) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                }
                else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            if ((this.currentIndex - 1) < 0) {
                this.currentIndex = (this.tracks.length - 1);
            }
            else {
                this.currentIndex--;
            }
        }
        else {
            this.resetSong();
        }
        this.updateCurrentTrack();
        this.play();
    }
    resetSong() {
        this.player.nativeElement.src = this.tracks[this.currentIndex].link;
    }
    selectTrack(index) {
        this.currentIndex = index - 1;
        this.updateCurrentTrack();
        this.play();
    }
    checkIfSongHasStartedSinceAtleastTwoSeconds() {
        return this.player.nativeElement.currentTime > 2;
    }
    updateCurrentTrack() {
        this.audioPlayerService.setCurrentTrack(this.tracks[this.currentIndex]);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AudioPlayerComponent.prototype, "playlist", null);
__decorate([
    ViewChild(MatPaginator, { static: false }),
    __metadata("design:type", typeof (_a = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _a : Object),
    __metadata("design:paramtypes", [typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object])
], AudioPlayerComponent.prototype, "matPaginator", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayPlaylist", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayVolumeControls", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayRepeatControls", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "pageSizeOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "expanded", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "autoPlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "disablePositionSlider", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayArtist", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "displayDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "tableHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "titleHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "artistHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "durationHeader", void 0);
__decorate([
    Output(),
    __metadata("design:type", Subject)
], AudioPlayerComponent.prototype, "trackEnded", void 0);
__decorate([
    ViewChild('audioPlayer', { static: true }),
    __metadata("design:type", typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object)
], AudioPlayerComponent.prototype, "player", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], AudioPlayerComponent.prototype, "startOffset", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AudioPlayerComponent.prototype, "endOffset", void 0);
AudioPlayerComponent = __decorate([
    Component({
        selector: 'mat-advanced-audio-player,ngx-audio-player',
        templateUrl: './ngx-audio-player.component.html',
        styleUrls: ['./ngx-audio-player.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object])
], AudioPlayerComponent);
export { AudioPlayerComponent };
//# sourceMappingURL=ngx-audio-player.component.js.map