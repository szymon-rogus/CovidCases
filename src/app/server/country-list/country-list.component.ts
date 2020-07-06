import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../model/country";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input() countryList : any[] = [];
  @Input() expandAll: boolean = false;
  @Input() sortBy: any = 'Country';
  @Input() reverse: boolean = false;
  filterName: string = '';
  filterMinTotal: number = 0;
  filterMaxTotal: number;
  filterMinRecovered: number = 0;
  filterMaxRecovered: number;
  filterMinDeaths: number = 0;
  filterMaxDeaths: number;

  page: number;
  pageItems: number;

  constructor(private filterService: FilterService) {
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
  }

  setPage($event: number) {
    this.page = $event;
  }

  getIndex = (index: number) => {
    return (index+1)+((this.page-1)*this.pageItems)
  }
}
