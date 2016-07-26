import { Component, Input, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ListItemComponent } from './list-item.component';

@Component({
  moduleId: module.id,
  selector: 'pn-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [ListItemComponent]
})

export class ListComponent implements OnInit {
	@Input() listType: string;
	@Input() searchQuery: string;

	items: FirebaseListObservable<any[]>;

	constructor(private af: AngularFire) { }

	ngOnInit() {
		this.items = this.af.database.list(this.listType);
	}
}
