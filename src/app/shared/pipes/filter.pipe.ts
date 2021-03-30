import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../../model/country";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], name: string, minTotal?: number, maxTotal?: number,
            minRecovered?: number, maxRecovered?: number,
            minDeaths?: number, maxDeaths?: number): Country[] {
    return countries.filter(country => this.startsWith(country.Country, name))
                    .filter(country => this.minValue(country.TotalConfirmed, minTotal))
                    .filter(country => this.maxValue(country.TotalConfirmed, maxTotal))
                    .filter(country => this.minValue(country.TotalRecovered, minRecovered))
                    .filter(country => this.maxValue(country.TotalRecovered, maxRecovered))
                    .filter(country => this.minValue(country.TotalDeaths, minDeaths))
                    .filter(country => this.maxValue(country.TotalDeaths, maxDeaths));
  }

  private startsWith = (name: string, regex: string) => {
    return name.substring(0, regex.length).toLowerCase() == regex.toLowerCase();
  }

  private minValue = (total: number, minTotal: number) => {
    return minTotal ? total >= minTotal : true;
  }

  private maxValue = (total: number, maxTotal: number) => {
    return maxTotal ? total <= maxTotal : true;
  }

}
