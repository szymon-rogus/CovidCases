import {Component, Input, OnInit} from '@angular/core';

import {GlobalData} from 'src/app/model/Global';
import {StylingService} from '../../services/styling.service';
import {Constants} from '../../shared/generalConstants/Constants';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  @Input() globalData: GlobalData;
  activeCases: number;
  date: string;

  constructor(public stylingService: StylingService, public constants: Constants) {}

  ngOnInit(): void {
    this.activeCases = this.globalData.TotalConfirmed - this.globalData.TotalDeaths - this.globalData.TotalRecovered;
    this.date = new Date(this.globalData?.Date).toLocaleDateString();
  }

  getDate = () => {
    return this.date;
  }

  getTotalConfirmed = () => {
    return this.globalData?.TotalConfirmed.toLocaleString();
  }

  getTotalDeaths = () => {
    return this.globalData?.TotalDeaths.toLocaleString();
  }

  getTotalRecovered = () => {
    return this.globalData?.TotalRecovered.toLocaleString();
  }

  getActiveCases = () => {
    return this.activeCases?.toLocaleString();
  }

  getNewConfirmed = () => {
    return this.globalData?.NewConfirmed.toLocaleString();
  }

  getNewDeaths = () => {
    return this.globalData?.NewDeaths.toLocaleString();
  }

  getNewRecovered = () => {
    return this.globalData?.NewRecovered.toLocaleString();
  }
}
