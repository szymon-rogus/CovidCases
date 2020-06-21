import {Component, Input, OnInit} from '@angular/core';
import {CountryDayInfo} from "../../../model/country-day-info";

@Component({
  selector: 'app-details-chart',
  templateUrl: './details-chart.component.html',
  styleUrls: ['./details-chart.component.css']
})
export class DetailsChartComponent implements OnInit {

  @Input() statistics: CountryDayInfo[] = [];
  @Input() size: number[];

  totalOn: boolean = true;
  deathsOn: boolean = false;
  recoveredOn: boolean = false;
  activeOn: boolean = false;

  chartDatasets: Array<any>;
  chartType: string = 'line';
  chartLabels: number[];
  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 0, 0, .2)',
      borderColor: 'rgba(255, 0, 0, .7)',
      borderWidth: 2,
      id: 'red',
    }
  ];
  chartOptions: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
    this.chartDatasets = [
      { data: this.getTotal(this.statistics), label: 'Total Confirmed'}
    ];
    this.chartLabels = this.size;
  }

  toggleTotal = () => {
    if(this.totalOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label != 'Total Confirmed';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id != 'red';
      });
      this.chartColors.entries();
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(255, 0, 0, .2)',
        borderColor: 'rgba(255, 0, 0, .7)',
        borderWidth: 2,
        id: 'red',
      });
      this.chartDatasets.push({ data: this.getTotal(this.statistics), label: 'Total Confirmed'});
    }
    this.totalOn = !this.totalOn;
  }

  toggleDeaths = () => {
    if(this.deathsOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label != 'Total Deaths';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id != 'black';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(0, 0, 0, .2)',
        borderColor: 'rgba(0, 0, 0, .7)',
        borderWidth: 2,
        id: 'black',
      });
      this.chartDatasets.push({ data: this.getDeaths(this.statistics), label: 'Total Deaths'});
    }
    this.deathsOn = !this.deathsOn;
  }

  toggleRecovered = () => {
    if(this.recoveredOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label != 'Total Recovered';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id != 'green';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(0, 255, 0, .2)',
        borderColor: 'rgba(0, 255, 0, .7)',
        borderWidth: 2,
        id: 'green',
      });
      this.chartDatasets.push({ data: this.getRecovered(this.statistics), label: 'Total Recovered'});
    }
    this.recoveredOn = !this.recoveredOn;
  }

  toggleActive = () => {
    if(this.activeOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label != 'Active Cases';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id != 'yellow';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(255, 165, 0, .2)',
        borderColor: 'rgba(255, 165, 0, .7)',
        borderWidth: 2,
        id: 'yellow',
      });
      this.chartDatasets.push({ data: this.getActive(this.statistics), label: 'Active Cases'});
    }
    this.activeOn = !this.activeOn;
  }

  getTotal = (data: CountryDayInfo[]) => {
    let newData = [];
    data.forEach(value => {
      newData.push(value.Confirmed);
    });
    return newData;
  }

  getDeaths = (data: CountryDayInfo[]) => {
    let newData = [];
    data.forEach(value => {
      newData.push(value.Deaths);
    });
    return newData;
  }

  getRecovered = (data: CountryDayInfo[]) => {
    let newData = [];
    data.forEach(value => {
      newData.push(value.Recovered);
    });
    return newData;
  }

  getActive = (data: CountryDayInfo[]) => {
    let newData = [];
    data.forEach(value => {
      newData.push(value.Active);
    });
    return newData;
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
