import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Country } from '../../../model/Country';
import {CountryFlagService} from '../../../services/country-flag.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  @Input() expand: boolean;
  @Input() index: number;
  @Input() sortBy: string;
  countryFlag: string;

  activeCases: number;

  constructor(private countryFlagService: CountryFlagService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activeCases = this.country.TotalConfirmed - this.country.TotalDeaths - this.country.TotalRecovered;
    this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 32);
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

  expandCountry = () => {
    this.expand = !this.expand;
  }

  @HostListener('window:resize', ['$event'])
  onResize = (event) => {
    if (event.target.innerWidth >= 1200) {
      this.expand = false;
    }
  }
}
