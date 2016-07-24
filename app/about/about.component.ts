import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AnimationService } from '../shared/Services/animation.service';
import { CompletedAnimation } from '../shared/Guards/animation.guard';

import { TypedListComponent } from './typed-list/typed-list.component';

@Component({
  moduleId: module.id,
  selector: 'pn-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ROUTER_DIRECTIVES, TypedListComponent]
})

export class AboutComponent implements CompletedAnimation {
	animateAway: boolean = false;

	constructor(private animService: AnimationService) { }

	completedAnimation(): Observable<boolean> | boolean {
		this.animateAway = true;
		return this.animService.confirmNav.take(1);
	}

}
