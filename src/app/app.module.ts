import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CountryComponent } from './server/country/country.component';
import { GlobalComponent } from './server/global/global.component';
import { CountryDetailsComponent } from './server/country-details/country-details.component';
import {OrderModule} from "ngx-order-pipe";
import { SorterComponent } from './server/sorter/sorter.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CountryComponent,
    GlobalComponent,
    CountryDetailsComponent,
    SorterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [CountryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
