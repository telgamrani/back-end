import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LookComponent } from './look/look.component';
import { Globals } from './globals';


@NgModule({
  declarations: [
    AppComponent,
    LookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
