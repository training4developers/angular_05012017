import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ColorToolComponent } from "./components/color-tool.component";
import { CarToolComponent } from "./components/car-tool.component";

import { DemoPipe } from "./pipes/demo.pipe";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ColorToolComponent, CarToolComponent, DemoPipe ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }


