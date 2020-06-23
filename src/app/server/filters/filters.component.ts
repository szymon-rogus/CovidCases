import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;
  @Output('updateName') filterName = new EventEmitter<string>();

  minTotal: number;
  @Output('updateMinTotal') filterMinTotal = new EventEmitter<number>();

  maxTotal: number;
  @Output('updateMaxTotal') filterMaxTotal = new EventEmitter<number>();

  minDeaths: number;
  @Output('updateMinDeaths') filterMinDeaths = new EventEmitter<number>();

  maxDeaths: number;
  @Output('updateMaxDeaths') filterMaxDeaths = new EventEmitter<number>();

  minRecovered: number;
  @Output('updateMinRecovered') filterMinRecovered = new EventEmitter<number>();

  maxRecovered: number;
  @Output('updateMaxRecovered') filterMaxRecovered = new EventEmitter<number>();

  resize: boolean = true;

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

  filterByMinDeaths(value: number) {
    this.filterMinDeaths.emit(value);
  }

  filterByMaxDeaths(value: number) {
    this.filterMaxDeaths.emit(value);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize = !(event.target.innerWidth < 1800 && event.target.innerWidth >= 1200);
  }
}
