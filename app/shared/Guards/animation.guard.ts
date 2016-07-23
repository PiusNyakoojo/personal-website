import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface CompletedAnimation {
	completedAnimation: () => Observable<boolean> | boolean;
}

export class AnimationGuard implements CanDeactivate<CompletedAnimation> {
	canDeactivate(component: CompletedAnimation): Observable<boolean> | boolean {
		return component.completedAnimation ? component.completedAnimation() : true;
	}
}