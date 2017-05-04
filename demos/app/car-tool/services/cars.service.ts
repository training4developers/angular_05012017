import { Injectable } from "@angular/core";

import { Car } from "../models/car";

@Injectable()
export class CarsService {

    private cars: Car[] = [
        { id: 1, make: "Ford", model: "Fusion", year: 2017, color: "blue", price: 25000 },
        { id: 2, make: "Chevy", model: "Volt", year: 2015, color: "red", price: 27000 },
        { id: 3, make: "Toyota", model: "Prius", year: 2016, color: "black", price: 30000 },
    ];

    public getAll() {
        return this.cars;
    }

    public getById(carId: number) {
        return this.cars.find((car) => car.id === carId);
    }

    public addCar(newCar: Car) {
        newCar.id = this.cars.reduce( (maxId: number, nextCar: Car) => Math.max(maxId, nextCar.id), 0 );
        this.cars = this.cars.concat(newCar);
        return newCar;
    }

    public deleteCar(carId: number) {
        const carIndex = this.cars.findIndex( (car) => car.id === carId );
        this.cars = [ ...this.cars.slice(0, carIndex), ...this.cars.slice(carIndex + 1) ];
    }
}
