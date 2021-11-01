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
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
var BandService = /** @class */ (function () {
    function BandService(http) {
        this.http = http;
        //API LOCAL
        //   private API_BAND = environment.API_LOCAL+'band';
        //API SERVER
        this.API_BAND = environment.API_SERVER + 'band';
    }
    BandService.prototype.createBand = function (band) {
        return this.http.post(this.API_BAND, band);
    };
    BandService.prototype.getListBand = function () {
        return this.http.get(this.API_BAND + '/list');
    };
    var _a;
    BandService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], BandService);
    return BandService;
}());
export { BandService };
//# sourceMappingURL=band.service.js.map