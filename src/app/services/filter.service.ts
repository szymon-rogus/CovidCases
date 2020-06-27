import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  @Output('updateName') filterName = new EventEmitter<string>();
  @Output('updateMinTotal') filterMinTotal = new EventEmitter<number>();
  @Output('updateMaxTotal') filterMaxTotal = new EventEmitter<number>();
  @Output('updateMinDeaths') filterMinDeaths = new EventEmitter<number>();
  @Output('updateMaxDeaths') filterMaxDeaths = new EventEmitter<number>();
  @Output('updateMinRecovered') filterMinRecovered = new EventEmitter<number>();
  @Output('updateMaxRecovered') filterMaxRecovered = new EventEmitter<number>();

  constructor() { }
}
