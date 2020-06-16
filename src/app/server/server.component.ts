import {Component, HostListener, Input, OnInit} from '@angular/core';
import {CountryListService} from '../services/country-list.service';
import {FiltersComponent} from "./filters/filters.component";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  countryList : any = [];
  sortBy: any = 'Country';
  reverse: boolean = false;
  filterName: string = '';
  filterMinTotal: number = 0;
  filterMaxTotal: number;
  filterMinRecovered: number = 0;
  filterMaxRecovered: number;

  constructor(private countryListService : CountryListService) {
  }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
          this.filterMaxTotal = data.Global.TotalConfirmed;
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
}
