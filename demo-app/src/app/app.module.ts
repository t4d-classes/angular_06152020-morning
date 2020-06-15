import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';

import { AppComponent } from './app.component';

// attach metadata to the AppModule class
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
