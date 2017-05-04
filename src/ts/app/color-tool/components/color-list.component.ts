import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "color-list",
    template: `
        <ul>
            <li list-item *ngFor="let theColor of sortedColors">
                {{theColor.name | titlecase}} - {{theColor.hex}}
                <img (click)="deleteColor(theColor.id)"
                    src="https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png"
                    title="Delete" width="24" height="24">
            </li>
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
        private route: ActivatedRoute,
    ) { }


    public ngOnInit() {
        this.route.data.subscribe( ({ colors }) => {
          this.colors = colors;
        } );
    }

    public createNewColor() {
        this.router.navigateByUrl("/color-tool/color-form");
    }

    public get sortedColors() {

        if (this.lastColors !== this.colors) {
            this.theSortedColors = this.colors.concat().sort();
            this.lastColors = this.colors;
        }

        return this.theSortedColors;
    }

    public refreshColors() {
        this.colorsSvc.getAll().subscribe((colors: Color[]) => {
            this.colors = colors;
        });
    }

    public deleteColor(colorId: number) {
        this.colorsSvc.delete(colorId).subscribe(() => {
            this.refreshColors();
        });
    }

}
