import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CountryComponent } from './server/country-list/country/country.component';
import { GlobalComponent } from './server/global/global.component';
import { CountryDetailsComponent } from './server/country-details/country-details.component';
import { OrderModule } from "ngx-order-pipe";
import { SorterComponent } from './server/sorter/sorter.component';
import { FilterPipe } from './shared/filter.pipe';
import { FiltersComponent} from './server/filters/filters.component';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DetailsChartComponent } from './server/country-details/details-chart/details-chart.component';
import { CountryListComponent } from './server/country-list/country-list.component';
import { EnlargeChevronDirective } from './server/country-list/enlarge-chevron/enlarge-chevron.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './server/country-list/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CountryComponent,
    GlobalComponent,
    CountryDetailsComponent,
    SorterComponent,
    FilterPipe,
    FiltersComponent,
    DetailsChartComponent,
    CountryListComponent,
    EnlargeChevronDirective,
    PaginationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        OrderModule,
        FormsModule,
        BrowserAnimationsModule,
        ChartsModule,
        NgxPaginationModule
    ],
  providers: [
    CountryComponent,
    FiltersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
