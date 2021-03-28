import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Country } from '../../../model/country';
import {SorterService} from "../../../services/sorter.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @Input() country : Country;
  @Input() expand: boolean = false;
  @Input() index: number;
  @Input() sortBy: string;

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
