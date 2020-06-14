import { Component, OnInit } from '@angular/core';
import {ServerComponent} from "../server.component";
import {CountryComponent} from "../country/country.component";

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  upName: boolean = true;
  upConfirmed: boolean = true;
  upDeaths: boolean = true;
  upRecovered: boolean = true;

  constructor(private countries : ServerComponent) { }

  ngOnInit(): void {
  }

  setSorter = (value: any, reverse: boolean) => {
    this.countries.sortBy = value;
    this.countries.reverse = reverse
  }

}
