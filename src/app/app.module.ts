import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
