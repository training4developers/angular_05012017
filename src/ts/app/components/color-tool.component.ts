import { Component, DoCheck } from "@angular/core";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            <li *ngFor="let color of sortedColors" (click)="deleteColor(color)">{{color}}</li>

            <!-- <ng-template ngFor let-color [ngForOf]="colors">
                 <li>{{color}}</li>
            </ng-template> -->

        </ul>
        <form (ngSubmit)="addColor()">
            <div>
                <label for="new-color-input">New Color:</label>
                <input type="text" id="new-color-input" name="newColorInput" [(ngModel)]="newColor">
            </div>
            <button>Add Color</button>
            <button type="reset">Reset</button>
        </form>
    `,
})
export class ColorToolComponent implements DoCheck {

    public newColor: string = "Hi";

    public colors: string[] = [
        "green",
        "white",
        "saffron",
        "red",
        "yellow",
        "blue",
    ];

    public lastColors: string[] = null;
    private theSortedColors: string[] = null;

    public get sortedColors() {

        if (this.lastColors !== this.colors) {
            console.log("sorting colors");
            this.theSortedColors = this.colors.concat().sort();
            this.lastColors = this.colors;
        }

        return this.theSortedColors;
    }

    public addColor() {
        // this.colors = this.colors.concat(this.newColor);
        this.colors.push(this.newColor);
        this.newColor = "";
    }

    public deleteColor(color: string) {
        this.colors = this.colors.filter((aColor) => aColor !== color);

        // const colorIndex = this.colors.findIndex((aColor) => aColor !== color);
        // this.colors = this.colors.slice(0, colorIndex).concat(this.colors.slice(colorIndex + 1));
        // this.colors = [ ...this.colors.slice(0, colorIndex), ...this.colors.slice(colorIndex + 1) ];
    }

    public ngDoCheck() {
        console.log("change detection executed");
    }

}
