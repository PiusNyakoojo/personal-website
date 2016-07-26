import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pn-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})

export class ListItemComponent {
	@Input() content: string;
}
