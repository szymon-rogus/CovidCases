import {Component, HostListener, OnInit} from '@angular/core';
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;
  minTotal: number;
  maxTotal: number;
  minDeaths: number;
  maxDeaths: number;
  minRecovered: number;
  maxRecovered: number;
  resize: boolean = true;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  filterByName(name: string) {
    this.filterService.filterName.emit(name);
  }

  filerByMinTotal(value: number) {
    this.filterService.filterMinTotal.emit(value);
  }

  filerByMaxTotal(value: number) {
    this.filterService.filterMaxTotal.emit(value);
  }

  filterByMinRecovered(value: number) {
    this.filterService.filterMinRecovered.emit(value);
  }

  filterByMaxRecovered(value: number) {
    this.filterService.filterMaxRecovered.emit(value);
  }

  filterByMinDeaths(value: number) {
    this.filterService.filterMinDeaths.emit(value);
  }

  filterByMaxDeaths(value: number) {
    this.filterService.filterMaxDeaths.emit(value);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize = !(event.target.innerWidth < 1800 && event.target.innerWidth >= 1200);
  }
}
