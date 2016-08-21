import { Component, OnInit } from '@angular/core';
import * as Velocity from '../../Libs/velocity.min.js';

@Component({
    selector: 'pn-typed-list',
    template: `
        <h1 id="console">
            <span id="text"></span>
            <span id="cursor">|</span>
        </h1>
    `,
    styleUrls: ['typed-list.component.scss']
})

export class TypedListComponent implements OnInit {
    private velocity: any;
	private text: HTMLElement;
	private cursor: HTMLElement;

	private selectedText: string = "";
	private selectedTextLength: number = 0;

	private textList: string[] = [
		'Software Engineer',
		'Web Developer',
		'Green tea ice cream enthusiast',
		'Game Developer',
		'Friend',
		'Son',
		'Brother',
		'Dreamer',
		'Experimentalist',
		'Lover of learning!',
		'Open Sourcerer',
		'Level 100 Death Knight'
	];

	ngOnInit() {
		this.text = document.getElementById('text');
		this.cursor = document.getElementById('cursor');

        this.velocity = Velocity;
        this.startAnimation();
	}

	private startAnimation() {
		// start cursor
		setInterval(() => { this.cursorAnimation() }, 600);

		// start typing
		this.selectedText = this.textList[Math.floor(this.textList.length * Math.random())];
		this.type();
	}

	private cursorAnimation() {
		this.velocity(this.cursor, { opacity: 0 }, { duration: "fast" });
		this.velocity(this.cursor, { opacity: 1 }, { duration: "fast" });
	}

	private type() {
		this.text.innerHTML = this.selectedText.substr(0, this.selectedTextLength++);
		if (this.selectedTextLength < this.selectedText.length + 1) {
			setTimeout(() => { this.type() }, 200);
		} else {
			setTimeout(() => { this.erase() }, 3000);
		}
	}

	private erase() {
		this.text.innerHTML = this.selectedText.substr(0, this.selectedTextLength--);
		if (this.selectedTextLength >= 0) {
			setTimeout(() => { this.erase() }, 50);
		} else {
			this.selectedTextLength = 0;
			this.selectedText = this.textList[Math.floor(this.textList.length * Math.random())];
			this.type();
		}
	}
}