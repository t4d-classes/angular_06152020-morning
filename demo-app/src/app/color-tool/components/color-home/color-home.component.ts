import { Component, OnInit } from '@angular/core';

import { Color } from '../../models/Color';

import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors: Color[] = [];

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit(): void {
    this.refreshColors();
  }

  refreshColors() {
    this.colorsSvc.allColors().subscribe(colors => {
      this.colors = colors;
    });
  }

  addColor(color: Color) {
    this.colorsSvc.appendColor(color).subscribe(() => {
      this.refreshColors();
    });
  }

  deleteColor(colorId: number) {
    this.colorsSvc.removeColor(colorId).subscribe(() => {
      this.refreshColors();
    });
  }

}
