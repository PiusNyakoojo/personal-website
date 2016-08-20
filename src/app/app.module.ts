import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule, ApplicationRef }       from '@angular/core';
import { FormsModule }                    from '@angular/forms';


import { AppComponent }                   from './app.component';
import { routing }                        from './app.routes';

import { NavbarComponent }                from './navbar/navbar.component';
import { AboutComponent }                 from './about/about.component';
import { PortfolioComponent }             from './portfolio/portfolio.component';
import { LabComponent }                   from './lab/lab.component';
import { BlogComponent }                  from './blog/blog.component';
import { ContactComponent }               from './contact/contact.component';

import { }                from './shared/Services/animation.service';
import { }                from './shared/Guards/animation.guard';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    LabComponent,
    BlogComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
