import { Component, Input } from "@angular/core";

import { Car } from "../models/car";
import { SortOrder } from "../enums/sort-order";
import { CarsService } from "../services/cars.service";

@Component({
    selector: "car-table",
    template: `
        <table class="car-table">
            <caption *ngIf="caption">{{caption}}</caption>
            <thead>
                <tr>
                    <th *ngFor="let col of cols" (click)="sortByCol(col.field)" [headerCol]="col.name"
                        [isColSorted]="sortColName === col.field"
                        [sortOrder]="sortOrder"></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <ng-template ngFor let-car [ngForOf]="sortedCars">
                    <tr [carViewRow]="car" *ngIf="editRowId !== car.id"
                        (onDeleteCar)="deleteCar(car.id)" (onEditCar)="editRowId = car.id"></tr>
                    <tr [carEditRow]="car" *ngIf="editRowId === car.id"
                        (onSaveCar)="replaceCar($event)" (onCancelCar)="editRowId = -1"></tr>
                </ng-template>
            </tbody>
        </table>
    `,
})
export class CarTableComponent {


    public cols = [
        { name: "Make", field: "make" },
        { name: "Model", field: "model" },
        { name: "Color", field: "color" },
        { name: "Year", field: "year" },
        { name: "Price", field: "price" },
    ];

    public editRowId: number = -1;

    public sortColName: string = "";
    public sortOrder: SortOrder = SortOrder.Ascending;

    public cars: Car[] = [];
    public lastCars: Car[] = null;
    public theSortedCars: Car[] = [];

    @Input()
    public caption: string;

    constructor(private carsSvc: CarsService) {
        this.refreshCars();
    }


    public sortByCol(colName: string) {

        if (this.sortColName === colName) {
            if (this.sortOrder === SortOrder.Ascending) {
                this.sortOrder = SortOrder.Descending;
            } else {
                this.sortOrder = SortOrder.Ascending;
            }
        } else {
            this.sortColName = colName;
            this.sortOrder = SortOrder.Ascending;
        }

        this.lastCars = null;
    }

    public get sortedCars() {

        if (this.lastCars !== this.cars) {
            this.theSortedCars = this.cars.concat().sort((a: Car, b: Car) => {
                const aValue = a[this.sortColName];
                const bValue = b[this.sortColName];

                if (aValue === bValue) {
                    return 0;
                } else {
                    if (this.sortOrder === SortOrder.Ascending) {
                        return aValue < bValue ? -1 : 1;
                    } else {
                        return aValue > bValue ? -1 : 1;
                    }
                }

            });
            this.lastCars = this.cars;
        }

        return this.theSortedCars;
    }

    public deleteCar(carId: number) {
        this.carsSvc.delete(carId).subscribe(() => this.refreshCars());
        this.editRowId = -1;
    }

    public replaceCar(car: Car) {
        this.carsSvc.replace(car).subscribe(() => this.refreshCars());
        this.editRowId = -1;
    }

    private refreshCars() {
        return this.carsSvc.getAll().subscribe((cars: Car[]) => {
            this.cars = cars;
        });
    }


}
