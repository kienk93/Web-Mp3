var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
var SongService = /** @class */ (function () {
    function SongService(http) {
        this.http = http;
        //API_LOCAL
        // private API_SONG = environment.API_LOCAL+'song';
        //API_SERVER
        this.API_SONG = environment.API_SERVER + 'song';
    }
    SongService.prototype.createSong = function (song) {
        return this.http.post(this.API_SONG, song);
    };
    SongService.prototype.pageSong = function (nextPage) {
        var params = nextPage;
        return this.http.get(this.API_SONG, { params: params });
    };
    var _a;
    SongService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], SongService);
    return SongService;
}());
export { SongService };
//# sourceMappingURL=song.service.js.map