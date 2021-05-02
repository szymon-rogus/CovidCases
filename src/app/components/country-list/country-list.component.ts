import {Component, Input, OnInit} from '@angular/core';

import {Country} from '../../model/Country';
import {FilterService} from '../../services/filter.service';
import {SorterService} from '../../services/sorter.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit {

  @Input() countryList: Country[];
  sortBy: string;
  reverse: boolean;
  filterName: string;
  page: number;
  pageItems: number;

  constructor(private filterService: FilterService, private sorterService: SorterService) {
    this.sortBy = 'Country';
    this.reverse = false;
    this.filterName = '';
    this.page = 1;
    this.pageItems = 10;
  }

  ngOnInit(): void {
    this.filterService.filterName
      .subscribe((name: string) => {
        this.filterName = name;
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

  getIndex = (index: number) => {
    return (index + 1) + ((this.page - 1) * this.pageItems);
  }

  setPage($event: number) {
    this.page = $event;
  }
}
