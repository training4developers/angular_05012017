import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PRODUCTS } from "./services/products.service";

import { ToolHeaderComponent } from "./components/tool-header.component";
import { ToolMenuComponent } from "./components/tool-menu/tool-menu.component";

@NgModule({
    imports: [ CommonModule, RouterModule.forChild([]) ],
    declarations: [ ToolHeaderComponent, ToolMenuComponent ],
    exports: [ ToolHeaderComponent, ToolMenuComponent ],
    providers: [
        { provide: PRODUCTS, useValue: { id: "app-module" }, multi: true },
    ],
})
export class SharedModule { }
