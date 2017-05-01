import { Component } from "@angular/core";

import { Car } from "../models/car";
import { SortOrder } from "../enums/sort-order";

@Component({
    selector: "car-tool",
    template: `
        <header>
            <h1>Car Tool</h1>
        </header>
        <table>
            <thead>
                <tr>
                    <th (click)="sortByCol('make')">
                        Make
                        <span *ngIf="sortColName === 'make'">
                            <img *ngIf="sortOrder === 0"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_down-24.png"
                                title="Sort Down" width="24" height="24">
                            <img *ngIf="sortOrder === 1"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_up-24.png"
                                title="Sort Up" width="24" height="24">
                        </span>
                    </th>
                    <th (click)="sortByCol('model')">
                        Model
                        <span *ngIf="sortColName === 'model'">
                            <img *ngIf="sortOrder === 0"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_down-24.png"
                                title="Sort Down" width="24" height="24">
                            <img *ngIf="sortOrder === 1"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_up-24.png"
                                title="Sort Up" width="24" height="24">
                        </span>
                    </th>
                    <th (click)="sortByCol('year')">
                        Year
                        <span *ngIf="sortColName === 'year'">
                            <img *ngIf="sortOrder === 0"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_down-24.png"
                                title="Sort Down" width="24" height="24">
                            <img *ngIf="sortOrder === 1"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_up-24.png"
                                title="Sort Up" width="24" height="24">
                        </span>
                    </th>
                    <th (click)="sortByCol('color')">
                        Color
                        <span *ngIf="sortColName === 'color'">
                            <img *ngIf="sortOrder === 0"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_down-24.png"
                                title="Sort Down" width="24" height="24">
                            <img *ngIf="sortOrder === 1"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_up-24.png"
                                title="Sort Up" width="24" height="24">
                        </span>
                    </th>
                    <th (click)="sortByCol('price')">
                        Price
                        <span *ngIf="sortColName === 'price'">
                            <img *ngIf="sortOrder === 0"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_down-24.png"
                                title="Sort Down" width="24" height="24">
                            <img *ngIf="sortOrder === 1"
                                src="https://maxcdn.icons8.com/Android_L/PNG/24/Arrows/sort_up-24.png"
                                title="Sort Up" width="24" height="24">
                        </span>
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of sortedCars">
                    <td>{{car.make | titlecase}}</td>
                    <td>{{car.model | titlecase}}</td>
                    <td>{{car.year}}</td>
                    <td>{{car.color | titlecase}}</td>
                    <td>{{car.price | currency:'USD':true:'1.2-2'}}</td>
                    <td><img (click)="deleteCar(car)"
                        src="https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png"
                        title="Delete" width="24" height="24"></td>
                </tr>
            </tbody>
        </table>
    `,
})
export class CarToolComponent {

    public sortColName: string = "";
    public sortOrder: SortOrder = SortOrder.Ascending;
    public lastCars: Car[] = null;
    public theSortedCars: Car[] = [];

    public cars: Car[] = [
        { make: "Ford", model: "Fusion", year: 2017, color: "blue", price: 25000 },
        { make: "Chevy", model: "Volt", year: 2015, color: "red", price: 27000 },
        { make: "Toyota", model: "Prius", year: 2016, color: "black", price: 30000 },
    ];

    public deleteCar(car: Car) {
        const carIndex = this.cars.indexOf(car);
        this.cars = [ ...this.cars.slice(0, carIndex), ...this.cars.slice(carIndex + 1) ];
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


}
