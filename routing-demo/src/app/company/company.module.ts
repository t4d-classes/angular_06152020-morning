import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';



@NgModule({
  declarations: [AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
