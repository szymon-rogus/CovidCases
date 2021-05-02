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
  date: string;
  data: Array<any>;
  newData: Array<any>;

  constructor(public stylingService: StylingService, public constants: Constants) {
  }

  ngOnInit(): void {
    this.date = new Date(this.globalData?.Date).toLocaleDateString();
    this.data = [
      {id: 'confirmed', label: this.constants.TOTAL_CONFIRMED, value: this.globalData?.TotalConfirmed.toLocaleString()},
      {id: 'deaths', label: this.constants.TOTAL_DEATHS, value: this.globalData?.TotalDeaths.toLocaleString()},
      {id: 'recovered', label: this.constants.TOTAL_RECOVERED, value: this.globalData?.TotalRecovered.toLocaleString()},
      {id: 'active', label: this.constants.ACTIVE_CASES, value: this.getActiveCases()},
    ];

    this.newData = [
      {id: 'newConfirmed', label: this.constants.NEW_CONFIRMED, value: this.globalData?.NewConfirmed.toLocaleString()},
      {id: 'newDeaths', label: this.constants.NEW_DEATHS, value: this.globalData?.NewDeaths.toLocaleString()},
      {id: 'newRecovered', label: this.constants.NEW_RECOVERED, value: this.globalData?.NewRecovered.toLocaleString()},
    ];
  }

  getDate = () => {
    return this.date;
  }

  getActiveCases = () => {
    return (this.globalData.TotalConfirmed - this.globalData.TotalDeaths - this.globalData.TotalRecovered).toLocaleString();
  }
}
