import { Component, OnInit } from '@angular/core';
import { GlobalData } from 'src/app/model/global';
import {CountryListService} from "../../services/country-list.service";

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  globalData : GlobalData;

  constructor(private globalDataService : CountryListService) { }

  ngOnInit(): void {
    this.globalDataService.getCountryList()
        .subscribe(data => {
          this.globalData = data.Global;
        });
  }

}
