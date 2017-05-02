import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { colorToolRouterModule } from "./color-tool.router";

import { ColorToolComponent } from "./components/color-tool.component";
import { ColorListComponent } from "./components/color-list.component";
import { ColorFormComponent } from "./components/color-form.component";

@NgModule({
    imports: [ CommonModule, FormsModule, colorToolRouterModule ],
    declarations: [ ColorToolComponent, ColorListComponent, ColorFormComponent ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
