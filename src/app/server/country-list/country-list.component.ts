import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../model/country";

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
  @Input() filterName: string = '';
  @Input() filterMinTotal: number = 0;
  @Input() filterMaxTotal: number;
  @Input() filterMinRecovered: number = 0;
  @Input() filterMaxRecovered: number;
  @Input() filterMinDeaths: number = 0;
  @Input() filterMaxDeaths: number;

  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setPage($event: number) {
    this.page = $event;
  }
}
