import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeAgo'
})

export class TimeAgoPipe implements PipeTransform {

	transform(value: string, args: any[]): string {

		const now: number = (new Date()).getMilliseconds();
		const date: number = (new Date(value)).getMilliseconds();

		const time = [
			{
				unit: 'year',
				value: Math.floor((now - date) / (1000 * 60 * 60 * 24 * 365))
			}, {
				unit: 'month',
				value: Math.floor((now - date) / (1000 * 60 * 60 * 24 * (365 / 12)))
			}, {
				unit: 'week',
				value: Math.floor((now - date) / (1000 * 60 * 60 * 24 * 7))
			}, {
				unit: 'day',
				value: Math.floor((now - date) / (1000 * 60 * 60 * 24))
			}, {
				unit: 'hour',
				value: Math.floor((now - date) / (1000 * 60 * 60))
			}, {
				unit: 'minute',
				value: Math.floor((now - date) / (1000 * 60))
			}, {
				unit: 'second',
				value: Math.floor((now - date) / (1000))
			}
		];

		for (let i = 0; i < time.length; i++) {
			if (time[i].value !== 0) {
				return time[i].value + ' ' + time[i].unit + (time[i].value > 1 ? 's' : '') + ' ago';
			}
		}
		
		return 'Error printing date :: time-ago.pipe.ts';

	}
}