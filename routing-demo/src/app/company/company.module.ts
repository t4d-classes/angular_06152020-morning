import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';



@NgModule({
  declarations: [AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule, CompanyRoutingModule,
  ]
})
export class CompanyModule { }
