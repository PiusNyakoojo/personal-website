import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }                from './about/about.component';
import { PortfolioComponent }            from './portfolio/portfolio.component';
import { LabComponent }                  from './lab/lab.component';
import { BlogComponent }                 from './blog/blog.component';
import { ContactComponent }              from './contact/contact.component';

import { AnimationGuard }                from './shared/Guards/animation.guard';


const routes: Routes = [
    { path: 'about',            component: AboutComponent,          canDeactivate: [AnimationGuard] },
    { path: 'portfolio',        component: PortfolioComponent,      canDeactivate: [AnimationGuard] },
    { path: 'lab',              component: LabComponent,            canDeactivate: [AnimationGuard] },
    { path: 'blog',             component: BlogComponent,           canDeactivate: [AnimationGuard] },
    { path: 'contact',          component: ContactComponent,        canDeactivate: [AnimationGuard] },
    { path: '',                 redirectTo: '/about',               pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);