import {Component, OnInit} from '@angular/core';
import {CountryListService} from '../services/country-list.service';
import {GlobalData} from "../model/global";
import {Country} from "../model/country";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  countryList : Country[] = [];
  globalData: GlobalData;
  expandAll: boolean = false;
  sortBy: any = 'Country';
  reverse: boolean = false;
  filterName: string = '';
  filterMinTotal: number = 0;
  filterMaxTotal: number;
  filterMinRecovered: number = 0;
  filterMaxRecovered: number;
  filterMinDeaths: number = 0;
  filterMaxDeaths: number;

  constructor(private countryListService : CountryListService) {
  }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
          this.globalData = data.Global;
        });
  }

  filterByName($event: string) {
    this.filterName = $event;
  }

  filterByMinTotal($event : number) {
    this.filterMinTotal = $event;
  }

  filterByMaxTotal($event : number) {
    this.filterMaxTotal = $event;
  }

  filterByMinRecovered($event : number) {
    this.filterMinRecovered = $event;
  }

  filterByMaxRecovered($event : number) {
    this.filterMaxRecovered = $event;
  }

  filterByMinDeaths($event : number) {
    this.filterMinDeaths = $event;
  }

  filterByMaxDeaths($event : number) {
    this.filterMaxDeaths = $event;
  }
}
