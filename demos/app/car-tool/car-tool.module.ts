import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CarsService } from "./services/cars.service";

import { CarFormComponent } from "./components/car-form.component";
import { CarTableComponent } from "./components/car-table.component";
import { CarToolComponent } from "./components/car-tool.component";

import { carToolRouterModule } from "./car-tool.router";

@NgModule({
    imports: [ CommonModule, FormsModule, carToolRouterModule ],
    declarations: [ CarToolComponent, CarTableComponent, CarFormComponent ],
    exports: [ CarToolComponent ],
    providers: [ CarsService ],
})
export class CarToolModule { }
