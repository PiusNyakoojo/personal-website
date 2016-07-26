import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ListItemComponent } from './list-item.component';

@Component({
  moduleId: module.id,
  selector: 'pn-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [ListItemComponent]
})

export class ListComponent {
	@Input() searchQuery: string;

	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('items');
	}
}
