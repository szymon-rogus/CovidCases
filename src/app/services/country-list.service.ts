import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CountryList} from '../model/country-list';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  url = 'https://api.covid19api.com/summary';

  constructor(private client: HttpClient) {
  }

  getCountryList(): Observable<CountryList> {
    const params = new HttpParams();
    return this.client.get<CountryList>(this.url, {params}).pipe();
  }
}
