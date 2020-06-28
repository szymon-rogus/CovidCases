import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryDayInfo} from "../model/country-day-info";

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  url = 'https://api.covid19api.com/total/dayone/country/';

  url2 = 'https://api.thevirustracker.com/free-api?countryTimeline=';

  constructor(private client: HttpClient) {
  }

  getCountryDetails(country: string): Observable<CountryDayInfo[]> {
    let params = new HttpParams();
    return this.client.get<CountryDayInfo[]>(this.url + country, {params}).pipe();
  }

  getCountryNotTrustedDetails(countryCode: string): Observable<any[]> {
    let params = new HttpParams();
    return this.client.get<any[]>(this.url2 + countryCode, {params}).pipe();
  }

  trustedCountry = (country: string) => {
    return !(country == 'China' || country == 'Australia');
  }
}
