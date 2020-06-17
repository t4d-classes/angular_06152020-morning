import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyuppercasePipe } from './pipes/myuppercase.pipe';
import { MyappendPipe } from './pipes/myappend.pipe';



@NgModule({
  // anything registered here can be access within a 
  // template within this module
  declarations: [ColorHomeComponent, ColorFormComponent, MyuppercasePipe, MyappendPipe],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  // allow other modules to use this component in their
  // templates
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
