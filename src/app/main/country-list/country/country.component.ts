import {Component, OnInit, Input} from '@angular/core';
import { Country } from '../../../model/country';

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

  activeCases: number;

  constructor() { }

  ngOnInit(): void {
    this.activeCases = this.country.TotalConfirmed
                      - this.country.TotalDeaths
                      - this.country.TotalRecovered;
  }

  checkCountryOrTotalConfirmed = () => {
    return !this.expand && (this.sortBy == 'TotalConfirmed' || this.sortBy == 'Country');
  }

  checkTotalDeaths = () => {
    return !this.expand && this.sortBy == 'TotalDeaths';
  }

  checkTotalRecovered = () => {
    return !this.expand && this.sortBy == 'TotalRecovered';
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
