import { Component, Input, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { TimeAgoPipe } from '../../shared/Pipes/time-ago.pipe';
import { MapToIterable } from '../../shared/Pipes/map-to-iterable.pipe';

@Component({
  moduleId: module.id,
  selector: 'pn-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
  pipes: [TimeAgoPipe, MapToIterable]
})

export class ListItemComponent implements OnInit {
	@Input() itemType: string;
	@Input() itemId: string;

	@Input() content: any;

	constructor() { }

	ngOnInit() {
		//this.content = this.af.database.object('/' + this.itemType + '/' + this.itemId);
	}
}
