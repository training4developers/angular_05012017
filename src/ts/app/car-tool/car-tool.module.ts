import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CarToolComponent } from "./components/car-tool.component";
import { DemoPipe } from "./pipes/demo.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ CarToolComponent, DemoPipe ],
    exports: [ CarToolComponent ],
})
export class CarToolModule { }
