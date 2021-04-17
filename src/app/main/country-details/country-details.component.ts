import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CountryDetailsService} from '../../services/country-details.service';
import {CountryDayInfo} from '../../model/CountryDayInfo';
import {Country} from '../../model/Country';
import {CountryListService} from '../../services/country-list.service';
import {CountryFlagService} from '../../services/country-flag.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  countryName: string;
  size: number;
  countryStats: CountryDayInfo[] = [];
  date: Date;
  isFetched = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private countryDetailsService: CountryDetailsService,
              private countryListService: CountryListService,
              private countryFlagService: CountryFlagService) {
    this.countryName = route.snapshot.params.country;
    this.country = this.router.getCurrentNavigation().extras.state as Country;
  }

  ngOnInit(): void {
    this.countryDetailsService.getCountryDetails(this.countryName)
      .subscribe(data => {
        this.countryStats = data;
        this.size = data.length;
      });
    this.isFetched = true;
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
  }

  getDays = () => {
    return this.countryStats.map(day => new Date(day.Date).toLocaleDateString());
  }

  getCountryFlag = () => {
    return this.countryFlagService.getCountryFlag(this.country?.CountryCode, 64);
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

  getTotalConfirmed = () => {
    return this.country?.TotalConfirmed.toLocaleString();
  }

  getTotalDeaths = () => {
    return this.country?.TotalDeaths.toLocaleString();
  }

  getTotalRecovered = () => {
    return this.country?.TotalRecovered.toLocaleString();
  }

  getActiveCases = () => {
    return this.countryStats[this.size - 1]?.Active.toLocaleString();
  }

  getNewConfirmed = () => {
    return this.country?.NewConfirmed.toLocaleString();
  }

  getNewDeaths = () => {
    return this.country?.NewDeaths.toLocaleString();
  }

  getNewRecovered = () => {
    return this.country?.NewRecovered.toLocaleString();
  }
}
