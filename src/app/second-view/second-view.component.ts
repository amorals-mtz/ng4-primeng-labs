import { Component } from '@angular/core';

import { CarsService } from 'app/services/cars.service';
import { Car } from 'app/domain/car';

@Component({
  selector: 'second-view',
  templateUrl: './second-view.component.html',
   providers: [ CarsService ]
})
export class SecondViewComponent {
  displayDialog: boolean;
  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  cars: Car[];

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.carService.getCarsSmall()
        .then(cars => this.cars = cars);
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.car);
    }
    else {
      cars[this.findSelectedCarIndex()] = this.car;
    }
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val,i) => i!=index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar();
    for(let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) { }
}
