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

  @Input() minTotalCases = 0;
  @Output('updateMinTotal') filterMinTotalCases = new EventEmitter<number>();

  @Input() maxTotalCases;
  @Output('updateMaxTotal') filterMaxTotalCases = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  filterByName(name: string) {
    this.filterName.emit(name);
  }

  filerByMinTotal(value: number) {
    this.filterMinTotalCases.emit(value);
  }

  filerByMaxTotal(value: number) {
    this.filterMaxTotalCases.emit(value);
  }
}
