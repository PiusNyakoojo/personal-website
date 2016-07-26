import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pn-search-filter',
  templateUrl: 'search-filter.component.html',
  styleUrls: ['search-filter.component.css']
})

export class SearchFilterComponent {
	@Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

	searchFor(value: string) {
		this.searchQuery.emit(value);
	}
}
