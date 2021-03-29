import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SorterService {

  sortBy = new EventEmitter<string>();
  reverse = new EventEmitter<boolean>();

  constructor() { }
}
