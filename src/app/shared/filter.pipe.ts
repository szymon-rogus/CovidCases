import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../model/country";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], name: string, minTotal?: number, maxTotal?: number,
            minRecovered?: number, maxRecovered?: number,
            minDeaths?: number, maxDeaths?: number): unknown {
    return countries.filter(country => this.startsWith(country.Country, name))
                    .filter(country => this.minValue(country.TotalConfirmed, minTotal))
                    .filter(country => this.maxValue(country.TotalConfirmed, maxTotal))
                    .filter(country => this.minValue(country.TotalRecovered, minRecovered))
                    .filter(country => this.maxValue(country.TotalRecovered, maxRecovered))
                    .filter(country => this.minValue(country.TotalDeaths, minDeaths))
                    .filter(country => this.maxValue(country.TotalDeaths, maxDeaths));
  }

  startsWith = (name: string, regex: string) => {
    let size = regex.length;
    return name.substring(0, size).toLowerCase() == regex.toLowerCase();
  }

  minValue = (totalConfirmed: number, minTotal: number) => {
    if(!minTotal)
      return true;
    return totalConfirmed >= minTotal;
  }

  maxValue = (totalConfirmed: number, maxTotal: number) => {
    if(!maxTotal)
      return true;
    return totalConfirmed <= maxTotal;
  }

}
