import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {Country} from '../../../model/Country';
import {CountryFlagService} from '../../../services/country-flag.service';
import {StylingService} from '../../../services/styling.service';
import {ColumnToggleService} from '../../../services/column-toggle.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  @Input() index: number;

  countryFlag: string;
  hiddenName: boolean;
  activeColumn: string;
  data: Array<any>;

  constructor(private countryFlagService: CountryFlagService, private router: Router,
              public stylingService: StylingService, public columnToggle: ColumnToggleService) {
    this.activeColumn = columnToggle.column;
  }

  ngOnInit(): void {
    this.columnToggle.selectedColumn.subscribe((column: string) => {
      this.activeColumn = column;
    });
    this.onResize();

    this.data = [
      {id: 'confirmed', value: this.country?.TotalConfirmed.toLocaleString()},
      {id: 'deaths', value: this.country?.TotalDeaths.toLocaleString()},
      {id: 'recovered', value: this.country?.TotalRecovered.toLocaleString()},
      {id: 'active', value: (this.country.TotalConfirmed - this.country.TotalDeaths - this.country.TotalRecovered).toLocaleString()}
    ];
  }

  routeToDetails = () => {
    this.router.navigate([this.country.Country], {state: this.country});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth >= 768) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 36, 27);
      this.hiddenName = false;
    } else if (window.innerWidth < 768 && window.innerWidth > 576) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 28, 21);
      this.hiddenName = true;
    } else {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 28, 21);
      this.hiddenName = false;
    }
  }
}
