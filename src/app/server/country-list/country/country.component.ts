import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Country } from '../../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @Input() country : Country;
  @Input() sortBy: string;
  @Input() expand: boolean = false;

  activeCases: number;

  constructor() { }

  ngOnInit(): void {
    this.activeCases = this.country.TotalConfirmed
                      - this.country.TotalDeaths
                      - this.country.TotalRecovered;
  }

  expandCountry = () => {
    this.expand = !this.expand;
  }
}
