import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../model/country";
import {FilterService} from "../../services/filter.service";
import {SorterService} from "../../services/sorter.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input() countryList : Country[];
  expandAll: boolean;
  sortBy: string;
  reverse: boolean;
  filterName: string;
  filterMinTotal: number;
  filterMaxTotal: number;
  filterMinRecovered: number;
  filterMaxRecovered: number;
  filterMinDeaths: number;
  filterMaxDeaths: number;
  page: number;
  pageItems: number;

  constructor(private filterService: FilterService, private sorterService: SorterService) {
    this.expandAll = false;
    this.sortBy = "Country";
    this.reverse = false;
    this.filterName = '';
    this.filterMinTotal = 0;
    this.filterMinRecovered = 0;
    this.filterMinDeaths = 0;
    this.page = 1;
    this.pageItems = 14;
  }

  ngOnInit(): void {
    this.filterService.filterName
      .subscribe((name: string) => {
        this.filterName = name;
      });
    this.filterService.filterMinTotal
      .subscribe((value: number) => {
        this.filterMinTotal = value;
      });
    this.filterService.filterMaxTotal
      .subscribe((value: number) => {
        this.filterMaxTotal = value;
      });
    this.filterService.filterMinRecovered
      .subscribe((value: number) => {
        this.filterMinRecovered = value;
      });
    this.filterService.filterMaxRecovered
      .subscribe((value: number) => {
        this.filterMaxRecovered = value;
      });
    this.filterService.filterMinDeaths
      .subscribe((value: number) => {
        this.filterMinDeaths = value;
      });
    this.filterService.filterMaxDeaths
      .subscribe((value: number) => {
        this.filterMaxDeaths = value;
      });

    this.sorterService.sortBy
      .subscribe((sortBy: string) => {
        this.sortBy = sortBy;
      });
    this.sorterService.reverse
      .subscribe((reverse: boolean) => {
        this.reverse = reverse;
      });
  }

  toggleExpandAll = () => {
    this.expandAll = !this.expandAll;
  }

  getIndex = (index: number) => {
    return (index+1)+((this.page-1)*this.pageItems)
  }

  setPage($event: number) {
    this.page = $event;
  }
}