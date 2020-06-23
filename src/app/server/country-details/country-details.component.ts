import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountryDetailsService} from "../../services/country-details.service";
import {CountryDayInfo} from "../../model/country-day-info";
import {Country} from "../../model/country";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{

  country: Country;
  countryName: string;
  size: number;
  countryStats: CountryDayInfo[] = [];
  date: Date;

  constructor(private router: Router, private route: ActivatedRoute, private countryDetailsService: CountryDetailsService) {
    this.countryName = route.snapshot.params.country;
    this.country = this.router.getCurrentNavigation().extras.state as Country;
  }

  ngOnInit(): void {
    this.countryDetailsService.getCountryDetails(this.countryName)
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
