import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class AnimationService {
    private _waitTime: number = 200; // 0.2 seconds

    confirmNav: Observable<boolean>; // confirm navigation

    constructor() {
        this.confirmNav = Observable.create((subscriber) => {
            subscriber.next(true);
            subscriber.complete();
        });

        this.confirmNav = this.confirmNav.delay(this._waitTime);
    }
}