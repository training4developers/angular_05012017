import { Component } from "@angular/core";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "tool-footer",
    template: `<footer><ng-content></ng-content></footer>`,
})
export class ColorToolFooterComponent {
    public copyright = "Copyright 2017, Color Tool 2";
}

@Component({
    selector: "color-tool",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <router-outlet></router-outlet>
        <tool-footer>
            <small>{{copyright}}</small>
        </tool-footer>
    `,
    providers: [ ColorsService ],
})
export class ColorToolComponent {

    public copyright = "Copyright 2017, Color Tool";
    public toolHeader: string = "Color Tool";
 }
