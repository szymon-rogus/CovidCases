import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryDayInfo} from '../model/country-day-info';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  url = 'https://api.covid19api.com/total/dayone/country/';

  constructor(private client: HttpClient) {
  }

  getCountryDetails(country: string): Observable<CountryDayInfo[]> {
    const params = new HttpParams();
    return this.client.get<CountryDayInfo[]>(this.url + country, {params}).pipe();
  }
}
