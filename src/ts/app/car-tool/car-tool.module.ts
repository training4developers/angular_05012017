import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { carToolRouterModule } from "./car-tool.router";
import { CarToolComponent } from "./components/car-tool.component";
import { CarTableComponent } from "./components/car-table.component";
import { CarFormComponent } from "./components/car-form.component";

import { CarTableViewRowComponent } from "./components/car-table-view-row/car-table-view-row.component";
import { CarTableHeaderColComponent } from "./components/car-table-header-col/car-table-header-col.component";

import { DemoPipe } from "./pipes/demo.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule, HttpModule, carToolRouterModule ],
    declarations: [
        CarToolComponent, CarTableComponent, CarFormComponent,
        CarTableViewRowComponent, CarTableHeaderColComponent,
        DemoPipe,
    ],
    exports: [ CarToolComponent ],
})
export class CarToolModule { }
