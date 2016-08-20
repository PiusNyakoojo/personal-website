import { Component } from '@angular/core';

@Component({
    selector: 'pn-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    pathList: string[] = ['About', 'Portfolio', 'Lab', 'Blog', 'Contact'];
}