import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CountryListService} from '../services/country-list.service';
import {GlobalData} from '../model/Global';
import {Country} from '../model/Country';
import {StylingService} from '../services/styling.service';

@Component({
  selector: 'app-server',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  countryList: Array<Country>;
  globalData: GlobalData;

  constructor(private countryListService: CountryListService, private router: Router, public stylingService: StylingService) {}

  ngOnInit(): void {
    this.countryListService.getCountryList()
        .subscribe(data => {
          this.countryList = data.Countries;
          this.globalData = data.Global;
        }, error => {
          this.router.navigate(['error', error.message])
            .then(() => {
              window.location.reload();
            });
        });
  }
}
