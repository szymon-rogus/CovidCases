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

  constructor(private countryListService : CountryListService) {
  }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
        });
  }

  newName($event: string) {
    console.log($event);
    this.filterName = $event;
  }
}
