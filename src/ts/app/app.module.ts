import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { appRouterModule } from "./app.router";

import { SharedModule } from "./shared/shared.module";
import { ColorToolModule } from "./color-tool/color-tool.module";
import { CarToolModule } from "./car-tool/car-tool.module";

import { PRODUCTS } from "./shared/services/products.service";


// import { AppComponent, PhoneValidatorDirective,
//     PreferredContactMethodValidatorDirective, ProductSerialNumberValidatorDirective } from "./app.component";
import {
    AppComponent, ChildDemoComponent, DemoDirDirective,
    Demo2DirDirective
} from "./app.component";
import { HomeComponent } from "./components/home.component";

import "../../scss/styles.scss";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, HttpModule,
        SharedModule,
        ColorToolModule,
        CarToolModule,
        // appRouterModule,
    ],
    providers: [
        { provide: PRODUCTS, useValue: { id: "app-module" }, multi: true },
    ],
    declarations: [
        AppComponent, HomeComponent, ChildDemoComponent,
        DemoDirDirective, Demo2DirDirective,
    ],
        // PhoneValidatorDirective, PreferredContactMethodValidatorDirective,
        // ProductSerialNumberValidatorDirective ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
