import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
