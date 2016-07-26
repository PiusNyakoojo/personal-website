import { Component, Input } from '@angular/core';

import { TimeAgoPipe } from '../../shared/Pipes/time-ago.pipe';

@Component({
  moduleId: module.id,
  selector: 'pn-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
  pipes: [TimeAgoPipe]
})

export class ListItemComponent {
	@Input() content: any;


}
