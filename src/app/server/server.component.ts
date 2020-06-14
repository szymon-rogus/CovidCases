import { Component, OnInit } from '@angular/core';
import {CountryListService} from '../services/country-list.service';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  countryList : any = [];
  sortBy: any = 'Country';
  reverse: boolean = false;

  constructor(private countryListService : CountryListService) { }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
        });
  }

}
