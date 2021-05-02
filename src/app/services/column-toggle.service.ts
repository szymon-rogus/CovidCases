import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnToggleService {

  columns: Array<any>;
  column: string;
  selectedColumn = new EventEmitter<string>();

  constructor() {
    this.columns = ['confirmed', 'deaths', 'recovered', 'active'];
    this.column = 'confirmed';
  }
}
