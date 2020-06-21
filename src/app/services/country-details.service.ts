import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  url = 'https://api.covid19api.com/total/dayone/country/';

  constructor(private client: HttpClient) {
  }

  getCountryDetails(country: string): Observable<any> {
    let params = new HttpParams();
    return this.client.get<any>(this.url + country, {params}).pipe();
  }
}
