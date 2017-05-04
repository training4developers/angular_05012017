import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { Car } from "../../models/car";

@Component({
    selector: "[carEditRow]",
    template: `
        <td><input type="text" name="editCarMake" [(ngModel)]="editCar.make"></td>
        <td><input type="text" name="editCarModel" [(ngModel)]="editCar.make"></td>
        <td><input type="text" name="editCarColor" [(ngModel)]="editCar.color"></td>
        <td><input type="text" name="editCarYear" [(ngModel)]="editCar.year"></td>
        <td><input type="text" name="editCarPrice" [(ngModel)]="editCar.price"></td>
        <td>
            <button (click)="onSaveCar.emit(editCar)">Save</button>
            <button (click)="onCancelCar.emit()">Cancel</button>
        </td>
    `,
    styles: [
        "input { width: 100px; }",
    ],
})
export class CarTableEditRowComponent implements OnInit {

    @Input("carEditRow")
    public car: Car;

    public editCar: Car = {} as Car;

    @Output()
    public onSaveCar = new EventEmitter<Car>();

    @Output()
    public onCancelCar = new EventEmitter<void>();

    public ngOnInit() {
        this.editCar = Object.assign({}, this.car);
    }
}
