
import {RouterConfig, provideRouter} from "@angular/router";

import { AboutComponent } from './about/';
import { PortfolioComponent } from './portfolio/';
import { LabComponent } from './lab/';
import { BlogComponent } from './blog/';
import { ContactComponent } from './contact/';


const APP_ROUTES: RouterConfig = [
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'lab', component: LabComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', redirectTo: '/about' }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];
