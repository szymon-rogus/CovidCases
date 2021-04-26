import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CountryDayInfo} from '../../../model/CountryDayInfo';

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
  chartType = 'line';
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
        }
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
        borderColor: 'rgba(255, 0, 0, .7)',
        borderWidth: 2,
        id: 'red',
      },
      {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderColor: 'rgba(0, 0, 0, .7)',
        borderWidth: 2,
        id: 'black',
      },
      {
        backgroundColor: 'rgba(0, 255, 0, .2)',
        borderColor: 'rgba(0, 255, 0, .7)',
        borderWidth: 2,
        id: 'green',
      },
      {
        backgroundColor: 'rgba(255, 165, 0, .2)',
        borderColor: 'rgba(255, 165, 0, .7)',
        borderWidth: 2,
        id: 'yellow',
      }
    );
    this.chartLabels = this.dates;
  }

  private getTotal = (data: CountryDayInfo[]) => {
    return data.map(day => day.Confirmed);
  }

  private getDeaths = (data: CountryDayInfo[]) => {
    return data.map(day => day.Deaths);
  }

  private getRecovered = (data: CountryDayInfo[]) => {
    return data.map(day => day.Recovered);
  }

  getActive = (data: CountryDayInfo[]) => {
    return data.map(day => day.Active);
  }

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}