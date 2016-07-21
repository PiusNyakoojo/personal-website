import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'pn-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

}
