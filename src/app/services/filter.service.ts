import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterName = new EventEmitter<string>();
  filterMinTotal = new EventEmitter<number>();
  filterMaxTotal = new EventEmitter<number>();
  filterMinDeaths = new EventEmitter<number>();
  filterMaxDeaths = new EventEmitter<number>();
  filterMinRecovered = new EventEmitter<number>();
  filterMaxRecovered = new EventEmitter<number>();

  constructor() { }
}
