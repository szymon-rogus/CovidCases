import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

  url = 'https://www.countryflags.io/';

  constructor() { }

  getCountryFlag(countryCode: string, size: number): string {
    return this.url + countryCode + '/shiny/' + size + '.png';
  }
}
