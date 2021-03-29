import {Component, OnInit} from '@angular/core';
import {CountryListService} from '../services/country-list.service';
import {GlobalData} from "../model/global";
import {Country} from "../model/country";
import {Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  countryList : Country[] = [];
  globalData: GlobalData;

  constructor(private countryListService : CountryListService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
          this.globalData = data.Global;
        }, error => {
          this.router.navigate(['error', error.message])
            .then(() => {
              window.location.reload();
            })
        });
  }
}
