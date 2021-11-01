import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
let SecondsToMinutesPipe = class SecondsToMinutesPipe {
    transform(time) {
        const hours = ('0' + Math.floor(time / 3600)).slice(-2);
        const minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
        const seconds = ('0' + time % 60).slice(-2);
        if (hours !== '00') {
            return `${hours}:${minutes}:${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }
};
SecondsToMinutesPipe = __decorate([
    Pipe({ name: 'secondsToMinutes' })
], SecondsToMinutesPipe);
export { SecondsToMinutesPipe };
//# sourceMappingURL=seconds-to-minutes.js.map