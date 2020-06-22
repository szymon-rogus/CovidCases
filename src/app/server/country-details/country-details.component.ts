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
  date: Date;

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

  getDate = () => {
    return new Date(this.countryStats[this.size-1].Date).toLocaleDateString();
  }

  getDays() {
    let days = []
    for(let i = 1; i <= this.size; i++) {
      days.push(i);
    }
    return days;
  }
}
