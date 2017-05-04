import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Car } from "../../models/car";

@Component({
    selector: "[carViewRow]",
    template: `
        <td>{{car.make | titlecase}}</td>
        <td>{{car.model | titlecase}}</td>
        <td>{{car.year}}</td>
        <td>{{car.color | titlecase}}</td>
        <td>{{car.price | currency:'USD':true:'1.2-2'}}</td>
        <td>
            <button (click)="onEditCar.emit()">Edit</button>
            <button (click)="onDeleteCar.emit()">Delete</button>
        </td>
    `,
})
export class CarTableViewRowComponent {

    @Input("carViewRow")
    public car: Car;

    @Output()
    public onDeleteCar = new EventEmitter<void>();

    @Output()
    public onEditCar = new EventEmitter<void>();

}
