import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "color-list",
    template: `
        <ul>
            <li color-list-item *ngFor="let theColor of sortedColors" [color]="theColor"
                (onDeleteColor)="deleteColor($event)"></li>
        </ul>
        <button (click)="createNewColor()">Create New Color</button>
    `,
})
export class ColorListComponent implements OnInit {

    public colors: Color[] = null;
    public lastColors: Color[] = null;
    private theSortedColors: Color[] = null;

    constructor(
        private colorsSvc: ColorsService,
        private router: Router,
    ) { }

    public refresh() {
        this.colorsSvc.getAll().subscribe((colors: Color[]) => {
            this.colors = colors;
        });
    }

    public ngOnInit() {
        this.refresh();
    }

    public createNewColor() {
        // this.router.navigate(["color-tool", "color-form"]);
        this.router.navigateByUrl("/color-tool/color-form");
    }

    public get sortedColors() {

        if (this.lastColors !== this.colors) {
            console.log("sorting colors");
            this.theSortedColors = this.colors.concat().sort();
            this.lastColors = this.colors;
        }

        return this.theSortedColors;
    }

    public deleteColor(colorId: number) {
        this.colorsSvc.delete(colorId);
    }

}
