import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {Country} from '../../../model/Country';
import {CountryFlagService} from '../../../services/country-flag.service';
import {StylingService} from '../../../services/styling.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  @Input() index: number;

  countryFlag: string;
  activeCases: number;

  constructor(private countryFlagService: CountryFlagService, private router: Router, public stylingService: StylingService) {}

  ngOnInit(): void {
    this.activeCases = this.country.TotalConfirmed - this.country.TotalDeaths - this.country.TotalRecovered;
    this.onResize();
  }

  routeToDetails = () => {
    this.router.navigate([this.country.Country], {state: this.country});
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
    return this.activeCases?.toLocaleString();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth > 575) {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 36, 27);
    } else {
      this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 28, 21);
    }
  }
}
