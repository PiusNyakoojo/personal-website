
import { RouterConfig, provideRouter } from "@angular/router";

import { AboutComponent } from './about/';
import { SearchableListComponent } from './searchable-list/';
import { ContactComponent } from './contact/';

import { AnimationGuard } from './shared/Guards/animation.guard';


const APP_ROUTES: RouterConfig = [
	{ path: 'about', component: AboutComponent, canDeactivate: [AnimationGuard] },
	{ path: 'portfolio', component: SearchableListComponent, canDeactivate: [AnimationGuard] },
	{ path: 'lab', component: SearchableListComponent, canDeactivate: [AnimationGuard] },
	{ path: 'blog', component: SearchableListComponent, canDeactivate: [AnimationGuard] },
	{ path: 'contact', component: ContactComponent, canDeactivate: [AnimationGuard] },
	{ path: '', redirectTo: '/about' }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];
