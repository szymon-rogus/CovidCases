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

  constructor(private countryListService : CountryListService) {
  }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
          this.globalData = data.Global;
        });
  }
}
