import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SharedModule } from "../shared/shared.module";
import { colorToolRouterModule } from "./color-tool.router";
import { PRODUCTS } from "../shared/services/products.service";

import { ColorsService } from "./services/colors.service";
import { ColorsResolverService } from "./services/colors-resolver.service";

import { ColorToolComponent, ColorToolFooterComponent } from "./components/color-tool.component";
import { ColorListComponent } from "./components/color-list.component";
import { ColorFormComponent } from "./components/color-form.component";
import { ListItemComponent } from "./components/list-item/list-item.component";

@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        SharedModule, colorToolRouterModule,
    ],
    declarations: [
        ColorToolComponent, ColorListComponent,
        ColorFormComponent, ListItemComponent,
        ColorToolFooterComponent,
    ],
    exports: [ ColorToolComponent ],
    providers: [
        ColorsService, ColorsResolverService,
        { provide: PRODUCTS, useValue: { id: "color-tool"}, multi: true },
    ],
})
export class ColorToolModule { }
