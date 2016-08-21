import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule, Input }                from '@angular/core';
import { FormsModule }                    from '@angular/forms';


import { AppComponent }                   from './app.component';
import { routing }                        from './app.routes';

import { NavbarComponent }                from './navbar/navbar.component';
import { BackgroundViewComponent }        from './shared/Components/background-view/background-view.component';
import { AboutComponent }                 from './about/about.component';
import { PortfolioComponent }             from './portfolio/portfolio.component';
import { LabComponent }                   from './lab/lab.component';
import { BlogComponent }                  from './blog/blog.component';
import { ContactComponent }               from './contact/contact.component';

import { TypedListComponent } from './shared/Components/typed-list/typed-list.component';

import { AnimationService }                from './shared/Services/animation.service';
import { AnimationGuard }                  from './shared/Guards/animation.guard';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundViewComponent,
    AboutComponent,
    PortfolioComponent,
    LabComponent,
    BlogComponent,
    ContactComponent,

    TypedListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  providers: [
    AnimationService,
    AnimationGuard
  ],

  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
