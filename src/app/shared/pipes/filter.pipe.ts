import {Pipe, PipeTransform} from '@angular/core';

import {Country} from '../../model/Country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], name?: string): Country[] {
    return countries.filter(country => this.startsWith(country.Country, name));
  }

  private startsWith = (name: string, regex: string) => {
    return name.substring(0, regex.length).toLowerCase() === regex.toLowerCase();
  }
}
