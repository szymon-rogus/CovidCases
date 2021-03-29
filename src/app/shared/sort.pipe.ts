import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../model/country";

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(countries: Country[], sortBy: string, reverse: boolean): Country[] {
    let sortedCountries : Country[] = [];
    if (sortBy === 'Country') {
      sortedCountries = countries.sort((a, b) => {
        return a.Country.localeCompare(b.Country);
      });
    }
    if (sortBy === 'TotalConfirmed') {
      sortedCountries =  countries.sort((a, b) => {
        return a.TotalConfirmed - b.TotalConfirmed;
      });
    }
    if (sortBy === 'TotalDeaths') {
      sortedCountries = countries.sort((a, b) => {
        return a.TotalDeaths - b.TotalDeaths;
      });
    }
    if (sortBy === 'TotalRecovered') {
      sortedCountries = countries.sort((a, b) => {
        return a.TotalRecovered - b.TotalRecovered;
      });
    }
    if (sortBy === 'Active') {
      sortedCountries =  countries.sort((a, b) => {
        return this.getActive(a) - this.getActive(b);
      });
    }

    return reverse ? sortedCountries.reverse() : sortedCountries;
  }

  private getActive = (country: Country): number => {
    return country.TotalConfirmed - country.TotalDeaths - country.TotalRecovered;
  }

}
