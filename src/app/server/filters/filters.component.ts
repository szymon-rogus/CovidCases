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

  filterByName = () => {
    this.filterService.filterName.emit(this.name);
  }

  filerByMinTotal = () => {
    this.filterService.filterMinTotal.emit(this.minTotal);
  }

  filerByMaxTotal = () => {
    this.filterService.filterMaxTotal.emit(this.maxTotal);
  }

  filterByMinRecovered = () => {
    this.filterService.filterMinRecovered.emit(this.minRecovered);
  }

  filterByMaxRecovered = () => {
    this.filterService.filterMaxRecovered.emit(this.maxRecovered);
  }

  filterByMinDeaths = () => {
    this.filterService.filterMinDeaths.emit(this.minDeaths);
  }

  filterByMaxDeaths = () => {
    this.filterService.filterMaxDeaths.emit(this.maxDeaths);
  }

  @HostListener('window:resize', ['$event'])
  onResize = (event) => {
    this.resize = !(event.target.innerWidth < 1800 && event.target.innerWidth >= 1200);
  }
}
