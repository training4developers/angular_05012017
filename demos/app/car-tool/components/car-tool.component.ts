import { Component } from "@angular/core";

@Component({
    selector: "car-tool",
    template: `
        <header>
            <h1>Car Tool</h1>
        </header>
        <router-outlet></router-outlet>
        <footer>
            <small>Copyright 2017, Car Tool, Inc.</small>
        </footer>
    `,
})
export class CarToolComponent { }
