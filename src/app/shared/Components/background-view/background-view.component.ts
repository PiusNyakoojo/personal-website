import { Component } from '@angular/core';

@Component({
    selector: 'pn-background-view',
    template: `
        <img id="backgroundImage" src='app/shared/Components/background-view/images/girl88_0.gif' alt="Background Image">
        <div id="frame">
            <div class="bottom"></div>
        </div>
    `,
    styleUrls: ['background-view.component.scss']
})

export class BackgroundViewComponent {

}