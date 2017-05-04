import { Component } from "@angular/core";

@Component({
    selector: "tool-menu",
    template: `
        <nav>
            <ul>
                <li *ngFor="let menuItem of menuItems">
                    <a [routerLink]="menuItem.url" routerLinkActive="active">{{menuItem.caption}}</a>
                </li>
            </ul>
        </nav>
    `,
    styles: [ require("./tool-menu.component.scss") ],
})
export class ToolMenuComponent {

    public menuItems = [
        { caption: "Home", url: "/home" },
        { caption: "Color Tool", url: "/color-tool" },
        { caption: "Car Tool", url: "/car-tool" },
    ];

}
