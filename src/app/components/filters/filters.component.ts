import {Component, HostListener, Input, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {StylingService} from '../../services/styling.service';
import {Country} from '../../model/Country';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;
  @Input() countryList: Array<Country>;
  filteredList: Array<Country>;
  starsWith: boolean;
  toggleWidth;
  toggleHeight;
  iconSize: string;

  constructor(private filterService: FilterService, public stylingService: StylingService) {}

  ngOnInit(): void {
    this.filteredList = this.countryList;
    this.starsWith = true;
    this.onResize();
  }

  filterByName = () => {
    this.filterService.filterName.emit(this.name);
    this.filterService.approach.emit(this.starsWith);
  }

  filterList = () => {
    if (this.starsWith) {
      this.filteredList = this.countryList.filter(country => this.startsWith(country.Country, this.name));
    } else {
      this.filteredList = this.countryList.filter(country => this.contains(country.Country, this.name));
    }
  }

  private startsWith = (name: string, regex: string) => {
    return name.substring(0, regex.length).toLowerCase() === regex.toLowerCase();
  }

  private contains = (name: string, regex: string) => {
    return name.toLowerCase().includes(regex.toLowerCase());
  }

  clearInput = () => {
    this.name = '';
    this.filterByName();
  }

  switchApproach = () => {
    this.starsWith = !this.starsWith;
    this.filterService.approach.emit(this.starsWith);
    this.filterList();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth > 1200) {
      this.toggleWidth = 46;
      this.toggleHeight = 24;
      this.iconSize = 'fa fa-times fa-lg';
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 575) {
      this.toggleWidth = 42;
      this.toggleHeight = 22;
      this.iconSize = 'fa fa-times fa-lg';
    }
    if (window.innerWidth <= 575) {
      this.toggleWidth = 38;
      this.toggleHeight = 20;
      this.iconSize = 'fa fa-times';
    }
  }
}
