import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeaderComponent } from './header/';
import { BackgroundViewComponent } from './shared/background-view/';

@Component({
  moduleId: module.id,
  selector: 'pn-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, BackgroundViewComponent]
})
export class AppComponent {

}
