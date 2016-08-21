import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CompletedAnimation } from '../shared/Guards/animation.guard';
import { AnimationService } from '../shared/Services/animation.service';

@Component({
    selector: 'pn-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements CompletedAnimation {
    animateAway: boolean = false;

    constructor(private animService: AnimationService) { }

    completedAnimation(): Observable<boolean> | boolean {
        this.animateAway = true;
        return this.animService.confirmNav.take(1);
    }
}
