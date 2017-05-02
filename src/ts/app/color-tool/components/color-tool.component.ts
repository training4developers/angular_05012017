import { Component } from "@angular/core";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            <li *ngFor="let color of sortedColors" >
                {{color.name | titlecase}} - {{color.hex}}
                <img (click)="deleteColor(color.id)"
                    src="https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png"
                    title="Delete" width="24" height="24">
            </li>
        </ul>
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
export class ColorToolComponent {

    public newColor: Color = {
        hex: "#000000",
    } as Color;

    public lastColors: Color[] = null;
    private theSortedColors: Color[] = null;

    constructor(private colors: ColorsService ) { }

    public get sortedColors() {

        if (this.lastColors !== this.colors.getAll()) {
            console.log("sorting colors");
            this.theSortedColors = this.colors.getAll().concat().sort();
            this.lastColors = this.colors.getAll();
        }

        return this.theSortedColors;
    }

    public addColor() {
        this.colors.append(this.newColor);
        this.newColor = {
            hex: "#000000",
        } as Color;
    }

    public deleteColor(colorId: number) {
        this.colors.delete(colorId);
    }

}
