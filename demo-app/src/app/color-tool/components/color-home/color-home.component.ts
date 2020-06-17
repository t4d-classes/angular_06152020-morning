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
    this.colors = this.colorsSvc.allColors();
  }

  addColor(color: Color) {
    this.colors = this.colorsSvc.appendColor(color).allColors();
  }

  deleteColor(colorId: number) {
    this.colors = this.colorsSvc.removeColor(colorId).allColors();
  }

}
