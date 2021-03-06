import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Car } from '../../models/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: Car[] = [];

  editCarIds: number[] = [];

  constructor(private carsSvc: CarsService) { }

  ngOnInit() {
    this.refreshCars();
  }

  refreshCars() {
    this.carsSvc.allCars().subscribe(cars => this.cars = cars);
    this.cancelAllCars();
  }

  addCar(car: Car) {
    this.carsSvc
      .appendCar(car)
      .pipe(switchMap(() => this.carsSvc.allCars()))
      .subscribe(cars => {
        this.cars = cars;
      });
  }

  saveCar(car: Car) {
    // two subscribes, better to use the chaining in add car
    this.carsSvc.replaceCar(car).subscribe(() => {
      this.refreshCars();
    });
  }

  deleteCar(carId: number) {
    this.carsSvc.removeCar(carId).subscribe(() => {
      this.refreshCars();
    });
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
