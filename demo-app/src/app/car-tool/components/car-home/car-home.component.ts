import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  headerText = 'Car Tool';

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
  ];

  editCarIds: number[] = [];

  addCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    this.cancelAllCars();
  }

  saveCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    const newCars = this.cars.concat();
    newCars[carIndex] = car;
    this.cars = newCars;
    this.cancelOneCar(car.id);
  }

  deleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.cancelAllCars();
  }

  editCar(carId: number) {
    // this.editCarId = carId;
    this.editCarIds = this.editCarIds.concat(carId);
  }

  cancelOneCar(carId: number) {
    this.editCarIds = this.editCarIds.filter(cId => cId !== carId);
  }

  cancelAllCars() {
    this.editCarIds = [];
  }

}
