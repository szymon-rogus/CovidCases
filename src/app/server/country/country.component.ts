import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../model/country'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country : Country;
  expand: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandCountry = () => {
    if(!this.expand)
      this.expand = true;
    else
      this.expand = false;
  }

}
