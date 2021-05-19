import {Component, ElementRef, Input, OnInit} from '@angular/core';

import {CountryDayInfo} from '../../../model/CountryDayInfo';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-details-chart',
  templateUrl: './details-chart.component.html',
  styleUrls: ['./details-chart.component.css']
})
export class DetailsChartComponent implements OnInit {

  @Input() statistics: CountryDayInfo[] = [];
  @Input() dates: string[];

  totalOn = true;
  deathsOn = false;
  recoveredOn = false;
  activeOn = false;

  chartDatasets: Array<any> = [];
  chartType: ChartType = 'line';
  chartLabels: string[];
  chartColors: Array<any> = [];
  chartOptions;

  constructor(private element: ElementRef) {
    this.chartOptions = {
      responsive: true,
      legend: {
        position: 'bottom',
        onHover: () => {
          this.element.nativeElement.style.cursor = 'pointer';
        },
        onLeave: () => {
          this.element.nativeElement.style.cursor = 'default';
        },
      },
      tooltips: {
        callbacks: {
          label: (item) => item.yLabel.toLocaleString()
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: (label) => label.toLocaleString()
          }
        }]
      }
    };
  }

  ngOnInit(): void {

    this.chartDatasets.push(
      { data: this.getTotal(this.statistics), label: 'Total confirmed'},
      { data: this.getDeaths(this.statistics), label: 'Total deaths'},
      { data: this.getRecovered(this.statistics), label: 'Total recovered'},
      { data: this.getActive(this.statistics), label: 'Active cases'},
    );

    this.chartColors.push(
      {
        backgroundColor: 'rgba(255, 0, 0, .2)',
        borderColor: 'rgba(255, 0, 0, .9)',
        borderWidth: 2,
        id: 'red',
      },
      {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderColor: 'rgba(0, 0, 0, .9)',
        borderWidth: 2,
        id: 'black',
      },
      {
        backgroundColor: 'rgba(0, 255, 0, .2)',
        borderColor: 'rgba(0, 255, 0, .9)',
        borderWidth: 2,
        id: 'green',
      },
      {
        backgroundColor: 'rgba(255, 165, 0, .2)',
        borderColor: 'rgba(255, 165, 0, .9)',
        borderWidth: 2,
        id: 'yellow',
      }
    );
    this.chartLabels = this.getDates();
  }

  private getTotal = (data: CountryDayInfo[]) => {
    return data.filter((day, index) => index % 2 === 0)
      .map(day => day.Confirmed);
  }

  private getDeaths = (data: CountryDayInfo[]) => {
    return data.filter((day, index) => index % 2 === 0)
      .map(day => day.Deaths);
  }

  private getRecovered = (data: CountryDayInfo[]) => {
    return data.filter((day, index) => index % 2 === 0)
      .map(day => day.Recovered);
  }

  getActive = (data: CountryDayInfo[]) => {
    return data.filter((day, index) => index % 2 === 0)
      .map(day => day.Active);
  }

  private getDates = () => {
    return this.dates.filter((date, index) => index % 2 === 0);
  }

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
