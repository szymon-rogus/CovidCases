import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {CountryDetailsService} from '../../services/country-details.service';
import {CountryDayInfo} from '../../model/CountryDayInfo';
import {Country} from '../../model/Country';
import {CountryListService} from '../../services/country-list.service';
import {CountryFlagService} from '../../services/country-flag.service';
import {StylingService} from '../../services/styling.service';
import {Constants} from '../../shared/generalConstants/Constants';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  countryName: string;
  countryFlag: string;
  size: number;
  countryStats: Array<CountryDayInfo>;
  date: Date;

  constructor(private router: Router, private route: ActivatedRoute, private countryDetailsService: CountryDetailsService,
              private countryListService: CountryListService, private countryFlagService: CountryFlagService,
              public stylingService: StylingService, public constants: Constants) {
    this.countryName = route.snapshot.params.country;
    this.country = this.router.getCurrentNavigation().extras.state as Country;
  }

  ngOnInit(): void {
    this.countryDetailsService.getCountryDetails(this.countryName)
      .subscribe(data => {
        this.countryStats = data;
        this.size = data.length;
      });
    this.route.params
      .subscribe((params: Params) => {
        this.countryName = params.country;
      });

    if (!this.country) {
      this.countryListService.getCountryList()
        .subscribe(data => {
          this.country = data.Countries.find(country =>
            country.Country === this.countryName
          );
        });
    }
    this.onResize();
  }

  getDays = () => {
    return this.countryStats.map(day => new Date(day.Date).toLocaleDateString());
  }

  getDateAndCheckData = () => {
    if (this.country) {
      this.checkForData();
    }
    return new Date(this.countryStats[this.size - 1].Date).toLocaleDateString();
  }

  private checkForData = () => {
    if (!this.country.NewConfirmed) {
      this.country.NewConfirmed = this.countryStats[this.size - 1].Confirmed - this.countryStats[this.size - 2].Confirmed;
      this.country.NewDeaths = this.countryStats[this.size - 1].Deaths - this.countryStats[this.size - 2].Deaths;
      this.country.NewRecovered = this.countryStats[this.size - 1].Recovered - this.countryStats[this.size - 2].Recovered;
    }
  }

  getData = () => {
    return [
      {id: 'confirmed', label: this.constants.TOTAL_CONFIRMED, value: this.country?.TotalConfirmed.toLocaleString()},
      {id: 'deaths', label: this.constants.TOTAL_DEATHS, value: this.country?.TotalDeaths.toLocaleString()},
      {id: 'recovered', label: this.constants.TOTAL_RECOVERED, value: this.country?.TotalRecovered.toLocaleString()},
      {id: 'active', label: this.constants.ACTIVE_CASES, value: this.countryStats[this.size - 1]?.Active.toLocaleString()},
    ];
  }

  getNewData = () => {
    return [
      {id: 'newConfirmed', label: this.constants.NEW_CONFIRMED, value: this.country?.NewConfirmed.toLocaleString()},
      {id: 'newDeaths', label: this.constants.NEW_DEATHS, value: this.country?.NewDeaths.toLocaleString()},
      {id: 'newRecovered', label: this.constants.NEW_RECOVERED, value: this.country?.NewRecovered.toLocaleString()},
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth >= 1500) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 72, 54);
    }
    if (window.innerWidth < 1500 && window.innerWidth >= 1200) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 56, 42);
    }
    if (window.innerWidth < 1200 && window.innerWidth >= 992) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 72, 54);
    }
    if (window.innerWidth < 992 && window.innerWidth >= 768) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 60, 45);
    }
    if (window.innerWidth < 768 && window.innerWidth >= 576) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 48, 36);
    }
    if (window.innerWidth < 576) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country?.CountryCode, 40, 30);
    }
  }
}
