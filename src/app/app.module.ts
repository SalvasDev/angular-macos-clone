import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'primeng/api';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
