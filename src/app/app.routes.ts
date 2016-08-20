import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }                from './about/about.component';
import { PortfolioComponent }            from './portfolio/portfolio.component';
import { LabComponent }                  from './lab/lab.component';
import { BlogComponent }                 from './blog/blog.component';
import { ContactComponent }              from './contact/contact.component';


const routes: Routes = [
    { path: 'about',            component: AboutComponent },
    { path: 'portfolio',        component: PortfolioComponent },
    { path: 'lab',              component: LabComponent },
    { path: 'blog',             component: BlogComponent },
    { path: 'contact',          component: ContactComponent },
    { path: '',                 redirectTo: '/about',               pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);