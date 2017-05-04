import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CarToolModule } from "./car-tool/car-tool.module";
import { appRouterModule } from "./app.router";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [ BrowserModule, appRouterModule, CarToolModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }


