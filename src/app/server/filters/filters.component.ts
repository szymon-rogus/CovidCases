import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerComponent} from "../server.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  @Input() name = '';
  @Output('updateName') filterName = new EventEmitter<string>();

  @Input() minTotal = 0;
  @Output('updateMinTotal') filterMinTotal = new EventEmitter<number>();

  @Input() maxTotal;
  @Output('updateMaxTotal') filterMaxTotal = new EventEmitter<number>();

  @Input() minRecovered = 0;
  @Output('updateMinRecovered') filterMinRecovered = new EventEmitter<number>();

  @Input() maxRecovered;
  @Output('updateMaxRecovered') filterMaxRecovered = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  filterByName(name: string) {
    this.filterName.emit(name);
  }

  filerByMinTotal(value: number) {
    this.filterMinTotal.emit(value);
  }

  filerByMaxTotal(value: number) {
    this.filterMaxTotal.emit(value);
  }

  filterByMinRecovered(value: number) {
    this.filterMinRecovered.emit(value);
  }

  filterByMaxRecovered(value: number) {
    this.filterMaxRecovered.emit(value);
  }
}
