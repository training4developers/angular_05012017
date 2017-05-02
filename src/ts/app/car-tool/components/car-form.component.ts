import { Component } from "@angular/core";

import { Car } from "../models/car";
import { CarsService } from "../services/cars.service";

@Component({
    selector: "car-form",
    template: `
        <form>
            Car Form
        </form>
    `,
})
export class CarFormComponent {

    constructor(private cars: CarsService) { }

}
