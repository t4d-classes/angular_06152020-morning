import { Injectable } from '@angular/core';

import { Color } from '../models/Color';

// @Injectable means that I can inject services into the ColorsService
@Injectable(
// added in Angular 6
{
  // register the ColorsService in to the AppModule (root module) of the application
  providedIn: 'root'
})
export class ColorsService {

  private colorsData: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  constructor() { }

  allColors() {
    return this.colorsData.concat();
  }

  appendColor(color: Color) {
    this.colorsData = this.colorsData.concat({
      ...color,
      id: Math.max(...this.colorsData.map(c => c.id), 0) + 1,
    });
    return this;
  }

  removeColor(colorId: number) {
    this.colorsData = this.colorsData.filter(c => c.id !== colorId);
    return this;
  }
}
