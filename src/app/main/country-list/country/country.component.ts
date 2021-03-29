import {Component, OnInit, Input} from '@angular/core';
import { Country } from '../../../model/country';
import {CountryFlagService} from "../../../services/country-flag.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @Input() country : Country;
  @Input() expand: boolean;
  @Input() index: number;
  @Input() sortBy: string;
  countryFlag: string;

  activeCases: number;

  constructor(private countryFlagService: CountryFlagService) { }

  ngOnInit(): void {
    this.activeCases = this.country.TotalConfirmed
                      - this.country.TotalDeaths
                      - this.country.TotalRecovered;

    this.countryFlag = this.countryFlagService.getCountryFlag(this.country.CountryCode, 32);
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
}
