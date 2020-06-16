import { Component } from '@angular/core';

import { Color } from '../../models/Color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  headerText = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  addColor(color: Color) {
    this.colors = this.colors.concat({
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });
  }

}
