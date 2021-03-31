import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page.component';
import { CountryComponent } from './main/country-list/country/country.component';
import { GlobalComponent } from './main/global/global.component';
import { CountryDetailsComponent } from './main/country-details/country-details.component';
import { OrderModule } from "ngx-order-pipe";
import { SorterComponent } from './main/sorter/sorter.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FiltersComponent} from './main/filters/filters.component';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DetailsChartComponent } from './main/country-details/details-chart/details-chart.component';
import { CountryListComponent } from './main/country-list/country-list.component';
import { EnlargeChevronDirective } from './shared/directives/enlarge-chevron.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './main/country-list/pagination/pagination.component';
import { UnavailableComponent } from './main/error/unavailable/unavailable.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CountryComponent,
    GlobalComponent,
    CountryDetailsComponent,
    SorterComponent,
    FilterPipe,
    FiltersComponent,
    DetailsChartComponent,
    CountryListComponent,
    EnlargeChevronDirective,
    PaginationComponent,
    UnavailableComponent,
    HighlightDirective,
    SortPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        OrderModule,
        FormsModule,
        BrowserAnimationsModule,
        ChartsModule,
        NgxPaginationModule,
        TooltipModule,
        NgxSliderModule
    ],
  providers: [
    CountryComponent,
    FiltersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
