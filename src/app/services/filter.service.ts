import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterName = new EventEmitter<string>();
  approach = new EventEmitter<boolean>();

  constructor() {}
}
