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

  chartDatasets: Array<any>;
  chartType: string = 'line';
  chartLabels: number[];
  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];
  chartOptions: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.statistics);
    console.log(this.size);
    this.chartDatasets = [
      { data: this.getTotal(this.statistics), label: 'Total Confirmed'}
    ];
    this.chartLabels = this.size;
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

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
