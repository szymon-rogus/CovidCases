import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../model/country'
import {ActivatedRoute} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  /*animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({transform: 'translateY(-50%)'}),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({transform: 'translateY(-50%)'}))
      ])
    ])
  ]*/
})
export class CountryComponent implements OnInit {
  @Input() country : Country;
  expand: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandCountry = () => {
    this.expand = !this.expand;
  }
}
