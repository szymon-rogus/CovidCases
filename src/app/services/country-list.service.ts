import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  url = 'https://api.covid19api.com/summary';

  constructor(private client: HttpClient) {
  }

  getCountryList(): Observable<any> {
    let params = new HttpParams();
    return this.client.get<any>(this.url, {params}).pipe();
  }
}
