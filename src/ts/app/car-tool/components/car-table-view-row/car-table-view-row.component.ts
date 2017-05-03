import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Car } from "../../models/car";

@Component({
    selector: "[car-table-view-row]",
    template: `
        <td>{{car.make | titlecase}}</td>
        <td>{{car.model | titlecase}}</td>
        <td>{{car.year}}</td>
        <td>{{car.color | titlecase}}</td>
        <td>{{car.price | currency:'USD':true:'1.2-2'}}</td>
        <td><img (click)="deleteCar(car.id)"
            src="https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png"
            title="Delete" width="24" height="24"></td>
    `,
})
export class CarTableViewRowComponent {

    @Input()
    public car: Car;

    @Output()
    public onDeleteCar = new EventEmitter<number>();

    public deleteCar(id: number) {
        this.onDeleteCar.emit(id);
    }
}
