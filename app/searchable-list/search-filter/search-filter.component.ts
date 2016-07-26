import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pn-search-filter',
  templateUrl: 'search-filter.component.html',
  styleUrls: ['search-filter.component.css']
})

export class SearchFilterComponent implements OnInit {
	@Input() listType: string;
	@Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

	placeholderText: string;

	ngOnInit() {
		switch(this.listType) {
			case 'portfolio': this.placeholderText = 'Search keywords (e.g. nodejs, C#, 2017)';
				break;
			case 'lab': this.placeholderText = 'Search keywords (e.g. acoustics, ants, 2016)';
				break;
			case 'blog': this.placeholderText = 'Search keywords (e.g. space, meditation, 2020)';
				break;
			default: this.placeholderText = ':O what are you doing?! Stop it!';
		}
	}

	searchFor(value: string) {
		this.searchQuery.emit(value);
	}
}
