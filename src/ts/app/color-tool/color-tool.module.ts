import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SharedModule } from "../shared/shared.module";
import { colorToolRouterModule } from "./color-tool.router";

import { ColorToolComponent } from "./components/color-tool.component";
import { ColorListComponent } from "./components/color-list.component";
import { ColorFormComponent } from "./components/color-form.component";
import { ColorListItemComponent } from "./components/color-list-item/color-list-item.component";

@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        SharedModule, colorToolRouterModule,
    ],
    declarations: [
        ColorToolComponent, ColorListComponent,
        ColorFormComponent, ColorListItemComponent,
    ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
