import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { appRouterModule } from "./app.router";

import { SharedModule } from "./shared/shared.module";
import { ColorToolModule } from "./color-tool/color-tool.module";
import { CarToolModule } from "./car-tool/car-tool.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home.component";

import "../../scss/styles.scss";


@NgModule({
    imports: [ BrowserModule, FormsModule, SharedModule, ColorToolModule, CarToolModule, appRouterModule ],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }


