var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AudioPlayerComponent } from 'projects/ngx-audio-player/src/public_api';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
        // Single
        this.singleTrack = [
            {
                title: 'In Love',
                link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
                duration: 227,
                artist: 'A Himitsu feat. Nori'
            }
        ];
        // Multiple
        this.multiple = [
            {
                title: 'In Love',
                link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
                duration: 227,
                artist: 'A Himitsu feat. Nori'
            },
            {
                title: 'On & On (feat. Daniel Levi) [NCS Release]',
                link: 'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0',
                duration: 208,
                artist: 'Cartoon'
            }
        ];
        this.msaapPlaylist = this.multiple;
        this.msaapDisplayTitle = true;
        this.msaapDisplayPlayList = true;
        this.pageSizeOptions = [2, 4, 6];
        this.msaapDisplayVolumeControls = true;
        this.msaapDisplayRepeatControls = true;
        this.msaapDisplayArtist = false;
        this.msaapDisplayDuration = false;
        this.msaapDisablePositionSlider = false;
        this.msaapTableHeader = 'My Playlist';
        this.msaapTitleHeader = 'My Title';
        this.msaapArtistHeader = 'My Artist';
        this.msaapDurationHeader = 'My Duration';
        // Start: Required for demo purpose
        this.msaapPlaylist2 = [
            {
                title: '1400',
                link: this.fmaBaseUrl + "/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3",
                duration: 212,
                artist: 'Yung Kartz'
            },
            {
                title: 'Epic Song',
                link: this.fmaBaseUrl + "/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3",
                duration: 54,
                artist: 'BoxCat Games'
            }
        ];
        this.msaapPlaylist3 = [
            {
                title: 'Hachiko (The Faithful Dog)',
                link: this.fmaBaseUrl + "/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3",
                duration: 185,
                artist: 'The Kyoto'
            },
            {
                title: 'Starling',
                link: this.fmaBaseUrl + "/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3",
                duration: 105,
                artist: 'Podington Bear'
            }
        ];
        this.currentTrack = null;
        this.appendTracksToPlaylistDisable = false;
        this.counter = 1;
    }
    HomeComponent.prototype.onEnded = function (event) {
        console.log(event);
        // your logic which needs to
        // be triggered once the
        // track ends goes here.
        // example
        this.currentTrack = null;
    };
    HomeComponent.prototype.logCurrentTrack = function () {
        var _this = this;
        this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(function (track) {
            _this.currentTrack = track;
        });
    };
    HomeComponent.prototype.logCurrentTime = function () {
        var _this = this;
        this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(function (time) {
            _this.currentTime = time;
        });
    };
    HomeComponent.prototype.consoleLogCurrentData = function () {
        // logCurrentTrack();
        // logCurrentTime();
        // Make sure to subscribe (by calling above methods)
        // before getting the data
        console.log(this.currentTrack.title + ' : ' + this.currentTime);
    };
    HomeComponent.prototype.appendTracksToPlaylist = function () {
        var _this = this;
        if (this.msaapPlaylist.length === 1) {
            this.msaapPlaylist = this.multiple;
        }
        else if (this.msaapPlaylist.length === 2) {
            this.msaapPlaylist2.map(function (track) {
                _this.msaapPlaylist.push(track);
            });
            this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
        }
        else if (this.msaapPlaylist.length === 4) {
            this.msaapPlaylist3.map(function (track) {
                _this.msaapPlaylist.push(track);
            });
            this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
            this.appendTracksToPlaylistDisable = true;
        }
    };
    HomeComponent.prototype.setSingleTrack = function () {
        this.msaapPlaylist = this.singleTrack;
        this.appendTracksToPlaylistDisable = false;
    };
    HomeComponent.prototype.changeMsaapDisplayTitle = function (event) {
        this.msaapDisplayTitle = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisplayPlayList = function (event) {
        this.msaapDisplayPlayList = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisplayVolumeControls = function (event) {
        this.msaapDisplayVolumeControls = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisplayRepeatControls = function (event) {
        this.msaapDisplayRepeatControls = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisplayArtist = function (event) {
        this.msaapDisplayArtist = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisplayDuration = function (event) {
        this.msaapDisplayDuration = event.checked;
    };
    HomeComponent.prototype.changeMsaapDisablePositionSlider = function (event) {
        this.msaapDisablePositionSlider = event.checked;
    };
    // End: Required for demo purpose
    HomeComponent.prototype.uploadAvatar = function ($event) {
        console.log('avatar ==> ', $event);
    };
    __decorate([
        ViewChild('player', { static: false }),
        __metadata("design:type", AudioPlayerComponent)
    ], HomeComponent.prototype, "advancedPlayer", void 0);
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map