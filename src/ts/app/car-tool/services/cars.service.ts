import { Injectable } from "@angular/core";

import { Car } from "../models/car";
import { ModelsService } from "../../shared/services/models.service";

@Injectable()
export class CarsService extends ModelsService<Car> {

    constructor() {
        super([
            { id: 1, make: "Ford", model: "Fusion", year: 2017, color: "blue", price: 25000 },
            { id: 2, make: "Chevy", model: "Volt", year: 2015, color: "red", price: 27000 },
            { id: 3, make: "Toyota", model: "Prius", year: 2016, color: "black", price: 30000 },
        ]);
    }

}
