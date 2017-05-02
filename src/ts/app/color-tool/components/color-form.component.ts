import { Component } from "@angular/core";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "color-form",
    template: `
        <form (ngSubmit)="addColor()">
            <div>
                <label for="color-name-input">Color Name:</label>
                <input type="text" id="color-name-input" name="colorNameInput" [(ngModel)]="newColor.name">
            </div>
            <div>
                <label for="color-hex-input">Color Hex:</label>
                <input type="color" id="color-hex-input" name="colorHexInput" [(ngModel)]="newColor.hex">
            </div>
            <button>Add Color</button>
        </form>
    `,
    providers: [ ColorsService ],
})
export class ColorFormComponent {

    public newColor: Color = {
        hex: "#000000",
    } as Color;

    constructor(private colors: ColorsService ) { }

    public addColor() {
        this.colors.append(this.newColor);
        this.newColor = {
            hex: "#000000",
        } as Color;
    }
}
