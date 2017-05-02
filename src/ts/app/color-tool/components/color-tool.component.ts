import { Component } from "@angular/core";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
        </header>
        <router-outlet></router-outlet>
        <footer>
            <small>Copyright 2017, Color Tool</small>
        </footer>
    `,
})
export class ColorToolComponent { }
