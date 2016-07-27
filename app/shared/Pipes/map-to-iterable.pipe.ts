import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'mapToIterable',
	pure: false
})

export class MapToIterable implements PipeTransform {
	transform(value: any, args: any[] = null): any {
		return Object.keys(value).sort().map(
			key => { return { "$key": key, "$value": value[key] } }
		);
	}
}