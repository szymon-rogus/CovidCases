import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

  url = 'https://flagcdn.com/';

  constructor() {}

  getCountryFlag(countryCode: string, width: number, height: number): string {
    return this.url + width + 'x' + height + '/' + countryCode.toLowerCase() + '.webp';
  }
}
