import { __decorate } from "tslib";
import { Pipe, } from '@angular/core';
let TimePassedPipe = class TimePassedPipe {
    /**
     * Pipe Constructor
     *
     * @param changeDetectorRef: ChangeDetectorRef
     * @param ngZone: NgZone
     */
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * Transform
     *
     * @param value: string
     */
    transform(value) {
        this.removeTimer();
        const d = new Date(value);
        const now = new Date();
        const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        const timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        const minutes = Math.round(Math.abs(seconds / 60));
        const hours = Math.round(Math.abs(minutes / 60));
        const days = Math.round(Math.abs(hours / 24));
        const months = Math.round(Math.abs(days / 30.416));
        const years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return 'just now';
        }
        else if (seconds <= 90) {
            return '1 min';
        }
        else if (minutes <= 45) {
            return minutes + ' mins';
        }
        else if (minutes <= 90) {
            return '1 hr';
        }
        else if (hours <= 22) {
            return hours + ' hrs';
        }
        else if (hours <= 36) {
            return '1 day';
        }
        else if (days <= 25) {
            return days + ' days';
        }
        else if (days <= 45) {
            return '1 month';
        }
        else if (days <= 345) {
            return months + ' months';
        }
        else if (days <= 545) {
            return '1 year';
        }
        else {
            // (days > 545)
            return years + ' years';
        }
    }
    /**
     * Remove timer
     */
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    /**
     * Returns Seconds Until Update
     * @param seconds: number
     */
    getSecondsUntilUpdate(seconds) {
        const min = 60;
        const hr = min * 60;
        const day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update ever 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    }
};
TimePassedPipe = __decorate([
    Pipe({
        name: 'timePassed',
        standalone: true,
    })
], TimePassedPipe);
export { TimePassedPipe };
//# sourceMappingURL=time-passed.pipe.js.map