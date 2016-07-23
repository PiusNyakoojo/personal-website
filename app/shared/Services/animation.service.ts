import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

export class AnimationService {
	private _waitTime: number = 300;

	confirmNav: Observable<boolean>;


	constructor() {
		this.confirmNav = Observable.create(function(subscriber){
			subscriber.next(true);
			subscriber.complete();
		});

		this.confirmNav = this.confirmNav.delay(this._waitTime);
	}
}