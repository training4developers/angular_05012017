import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { carToolRouterModule } from "./car-tool.router";
import { CarToolComponent } from "./components/car-tool.component";
import { CarTableComponent } from "./components/car-table.component";
import { CarFormComponent } from "./components/car-form.component";
import { DemoPipe } from "./pipes/demo.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule, carToolRouterModule ],
    declarations: [ CarToolComponent, CarTableComponent, CarFormComponent, DemoPipe ],
    exports: [ CarToolComponent ],
})
export class CarToolModule { }
