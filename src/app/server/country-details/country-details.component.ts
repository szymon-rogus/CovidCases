import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryDetailsService} from "../../services/country-details.service";
import {CountryDayInfo} from "../../model/country-day-info";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{

  country: string;
  size: number;
  countryStats: CountryDayInfo[] = [];

  constructor(route: ActivatedRoute, private countryDetailsService: CountryDetailsService) {
    this.country = route.snapshot.params.country;
  }

  ngOnInit(): void {
    this.countryDetailsService.getCountryDetails(this.country)
      .subscribe(data => {
        this.countryStats = data;
        this.size = data.length;
      });
  }

  getDays() {
    let days = []
    let k = 1;
    if(this.size <= 500 && this.size > 200) {
      k = 2;
    }
    if(this.size <= 1000 && this.size > 500) {
      k = 4;
    }
    if(this.size > 1000) {
      k = 8;
    }
    for(let i = 1; i <= this.size; i=i+k) {
      days.push(i);
    }
    return days;
  }

  getCountryStats() {
    if(this.size <= 500 && this.size > 200) {
      return this.countryStats.filter((value, index) => {
        return index % 2 == 0;
      })
    }
    if(this.size <= 1000 && this.size > 500) {
      return this.countryStats.filter((value, index) => {
        return index % 4 == 0;
      })
    }
    if(this.size > 1000) {
      return this.countryStats.filter((value, index) => {
        return index % 8 == 0;
      })
    }
    return this.countryStats;
  }
}
