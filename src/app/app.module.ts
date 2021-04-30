import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgToggleModule } from 'ng-toggle-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page.component';
import { CountryComponent } from './components/country-list/country/country.component';
import { GlobalComponent } from './components/global/global.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { OrderModule } from 'ngx-order-pipe';
import { SorterComponent } from './components/sorter/sorter.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FiltersComponent} from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsChartComponent } from './components/country-details/details-chart/details-chart.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { EnlargeChevronDirective } from './shared/directives/enlarge-chevron.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './components/country-list/pagination/pagination.component';
import { UnavailableComponent } from './components/error/unavailable/unavailable.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Constants } from './shared/generalConstants/Constants';

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
    SortPipe,
    HeaderComponent,
    FooterComponent
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
      NgToggleModule
    ],
  providers: [
    CountryComponent,
    FiltersComponent,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
