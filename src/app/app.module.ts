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
import { FilterPipe } from './shared/filter.pipe';
import { FiltersComponent} from './server/filters/filters.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CountryComponent,
    GlobalComponent,
    CountryDetailsComponent,
    SorterComponent,
    FilterPipe,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    FormsModule
  ],
  providers: [
    CountryComponent,
    FiltersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
