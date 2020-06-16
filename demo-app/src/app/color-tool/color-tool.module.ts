import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  // anything registered here can be access within a 
  // template within this module
  declarations: [ColorHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  // allow other modules to use this component in their
  // templates
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
