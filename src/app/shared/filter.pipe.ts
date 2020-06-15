import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../model/country";
import {FiltersComponent} from "../server/filters/filters.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], name: string): unknown {
    return countries.filter(country => this.startsWith(country.Country, name));
  }

  startsWith = (name: string, regex: string) => {
    let size = regex.length;
    return name.substring(0, size) == regex;

  }

}
