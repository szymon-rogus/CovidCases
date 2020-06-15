import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../model/country";
import {FiltersComponent} from "../server/filters/filters.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], name: string, minTotal: number, maxTotal: number): unknown {
    return countries.filter(country => this.startsWith(country.Country, name))
                    .filter(country => this.minTotal(country.TotalConfirmed, minTotal))
                    .filter(country => this.maxTotal(country.TotalConfirmed, maxTotal));
  }

  startsWith = (name: string, regex: string) => {
    let size = regex.length;
    return name.substring(0, size) == regex;
  }

  minTotal = (totalConfirmed: number, minTotal: number) => {
    return totalConfirmed >= minTotal;
  }

  maxTotal = (totalConfirmed: number, maxTotal: number) => {
    return totalConfirmed <= maxTotal;
  }

}
