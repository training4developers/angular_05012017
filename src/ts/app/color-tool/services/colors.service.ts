import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Color } from "../models/color";
import { ModelsService } from "../../shared/services/models.service";

@Injectable()
export class ColorsService extends ModelsService<Color> {

    constructor(http: Http) {
        super(http, "http://localhost:3010/colors");
    }

}
