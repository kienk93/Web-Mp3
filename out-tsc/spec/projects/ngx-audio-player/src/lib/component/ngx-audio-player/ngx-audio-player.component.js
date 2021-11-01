var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, Output, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { Subject } from 'rxjs';
var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent(elem) {
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
            console.warn("'mat-advanced-audio-player' selector is deprecated; use 'ngx-audio-player' instead.");
        }
        this.audioPlayerService = new AudioPlayerService();
    }
    Object.defineProperty(AudioPlayerComponent.prototype, "playlist", {
        set: function (playlist) {
            this.audioPlayerService.setPlaylist(playlist);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioPlayerComponent.prototype, "matPaginator", {
        set: function (mp) {
            this.paginator = mp;
            this.setDataSourceAttributes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioPlayerComponent.prototype, "startOffset", {
        get: function () {
            return this.startOffsetValue;
        },
        set: function (seconds) {
            this.startOffsetValue = seconds;
            this.player.nativeElement.currentTime = seconds;
        },
        enumerable: false,
        configurable: true
    });
    AudioPlayerComponent.prototype.currTimePosChanged = function (event) {
        this.player.nativeElement.currentTime = event.value;
    };
    AudioPlayerComponent.prototype.bindPlayerEvent = function () {
        var _this = this;
        this.player.nativeElement.addEventListener('playing', function () {
            _this.isPlaying = true;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', function () {
            _this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.currentTime = Math.floor(_this.player.nativeElement.currentTime);
            // BUG: Commenting for `ended` event not firing #66
            // if (this.currentTime >= this.duration - this.endOffset) {
            //     this.player.nativeElement.pause();
            // }
        });
        this.player.nativeElement.addEventListener('volume', function () {
            _this.volume = Math.floor(_this.player.nativeElement.volume);
        });
        if (!this.iOS) {
            this.player.nativeElement.addEventListener('loadstart', function () {
                _this.loaderDisplay = true;
            });
        }
        this.player.nativeElement.addEventListener('loadedmetadata', function () {
            _this.loaderDisplay = false;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('ended', function () {
            _this.trackEnded.next('ended');
        });
    };
    AudioPlayerComponent.prototype.playBtnHandler = function () {
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
    };
    AudioPlayerComponent.prototype.play = function (track) {
        var _this = this;
        if (track) {
            this.startOffset = track.startOffset || 0;
            this.endOffset = track.endOffset || 0;
        }
        setTimeout(function () {
            _this.player.nativeElement.play();
        }, 50);
    };
    AudioPlayerComponent.prototype.toggleVolume = function () {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    };
    AudioPlayerComponent.prototype.toggleRepeat = function () {
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
    };
    AudioPlayerComponent.prototype.setVolume = function (vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    };
    AudioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bindPlayerEvent();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', function () {
            if (_this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                if (_this.repeat === 'all') {
                    _this.nextSong();
                }
                else if (_this.repeat === 'one') {
                    _this.play();
                }
                else if (_this.repeat === 'none') {
                    // Do nothing
                }
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.audioPlayerService.setCurrentTime(_this.player.nativeElement.currentTime);
        });
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(function (tracks) {
            if (tracks !== null && tracks !== []) {
                _this.tracks = tracks;
                _this.initialize();
            }
        });
    };
    AudioPlayerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('displayArtist') || changes.hasOwnProperty('displayDuration')) {
            this.buildDisplayedColumns();
        }
    };
    AudioPlayerComponent.prototype.buildDisplayedColumns = function () {
        this.displayedColumns = ['title'];
        if (this.displayArtist) {
            this.displayedColumns.push('artist');
        }
        if (this.displayDuration) {
            this.displayedColumns.push('duration');
        }
        this.displayedColumns.push('status');
    };
    AudioPlayerComponent.prototype.initialize = function () {
        this.buildDisplayedColumns();
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentTrack();
        if (this.autoPlay) {
            this.play();
        }
    };
    AudioPlayerComponent.prototype.setDataSourceAttributes = function () {
        var index = 1;
        if (this.tracks) {
            this.tracks.forEach(function (track) {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    };
    AudioPlayerComponent.prototype.nextSong = function () {
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
    };
    AudioPlayerComponent.prototype.previousSong = function () {
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
    };
    AudioPlayerComponent.prototype.resetSong = function () {
        this.player.nativeElement.src = this.tracks[this.currentIndex].link;
    };
    AudioPlayerComponent.prototype.selectTrack = function (index) {
        this.currentIndex = index - 1;
        this.updateCurrentTrack();
        this.play();
    };
    AudioPlayerComponent.prototype.checkIfSongHasStartedSinceAtleastTwoSeconds = function () {
        return this.player.nativeElement.currentTime > 2;
    };
    AudioPlayerComponent.prototype.updateCurrentTrack = function () {
        this.audioPlayerService.setCurrentTrack(this.tracks[this.currentIndex]);
    };
    var _a, _b, _c, _d;
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
    return AudioPlayerComponent;
}());
export { AudioPlayerComponent };
//# sourceMappingURL=ngx-audio-player.component.js.map