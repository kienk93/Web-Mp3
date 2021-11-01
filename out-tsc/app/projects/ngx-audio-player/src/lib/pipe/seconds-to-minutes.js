var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
var SecondsToMinutesPipe = /** @class */ (function () {
    function SecondsToMinutesPipe() {
    }
    SecondsToMinutesPipe.prototype.transform = function (time) {
        var hours = ('0' + Math.floor(time / 3600)).slice(-2);
        var minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
        var seconds = ('0' + time % 60).slice(-2);
        if (hours !== '00') {
            return hours + ":" + minutes + ":" + seconds;
        }
        return minutes + ":" + seconds;
    };
    SecondsToMinutesPipe = __decorate([
        Pipe({ name: 'secondsToMinutes' })
    ], SecondsToMinutesPipe);
    return SecondsToMinutesPipe;
}());
export { SecondsToMinutesPipe };
//# sourceMappingURL=seconds-to-minutes.js.map