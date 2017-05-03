import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Car } from "../models/car";
import { ModelsService } from "../../shared/services/models.service";

@Injectable()
export class CarsService extends ModelsService<Car> {

    constructor(http: Http) {
        super(http, "http://localhost:3010/cars");
    }

}
