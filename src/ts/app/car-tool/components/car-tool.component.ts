import { Component, ViewEncapsulation } from "@angular/core";

import { CarsService } from "../services/cars.service";

@Component({
    selector: "car-tool",
    template: `
        <header>
            <h1>Car Tool</h1>
        </header>
        <router-outlet></router-outlet>
    `,
    providers: [ CarsService ],
    encapsulation: ViewEncapsulation.Emulated,
    styles: [
        "h1 { color: red; }",
    ],
})
export class CarToolComponent { }
