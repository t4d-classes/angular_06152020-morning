import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  // Not valid JS, this a TypeScript
  // model data which can be displayed on the template
  headerText = 'Color Tool';

  constructor() { }

  ngOnInit(): void {
  }

}
