import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ColorToolModule } from "./color-tool/color-tool.module";
import { CarToolModule } from "./car-tool/car-tool.module";

import { AppComponent } from "./app.component";


@NgModule({
    imports: [ BrowserModule, FormsModule, ColorToolModule, CarToolModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }


