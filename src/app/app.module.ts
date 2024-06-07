import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { PopupfilterComponent } from './components/popupfilter/popupfilter.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    PopupfilterComponent,
    DialogModule,
    ButtonModule,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PopupfilterComponent, DialogModule, ButtonModule],
})
export class AppModule {}
