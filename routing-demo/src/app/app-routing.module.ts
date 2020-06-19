import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './company/components/about-page/about-page.component';
import { ContactPageComponent } from './company/components/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
