import { Component, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pn-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnDestroy {
	animateAway: boolean = false;

	ngOnDestroy() {
		this.animateAway = true;
	}

}
