import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AnimationService } from '../shared/Services/animation.service';
import { CompletedAnimation } from '../shared/Guards/animation.guard';

import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ListComponent } from './list/list.component';

@Component({
  moduleId: module.id,
  selector: 'pn-searchable-list',
  templateUrl: 'searchable-list.component.html',
  styleUrls: ['searchable-list.component.css'],
  directives: [SearchFilterComponent, ListComponent]
})

export class SearchableListComponent  implements CompletedAnimation {
	query: string;
	
	animateAway: boolean = false;

	constructor(private animService: AnimationService) { }

	completedAnimation(): Observable<boolean> | boolean {
		this.animateAway = true;
		return this.animService.confirmNav.take(1);
	}

}
