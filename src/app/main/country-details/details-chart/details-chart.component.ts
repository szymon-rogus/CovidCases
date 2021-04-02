import {Component, Input, OnInit} from '@angular/core';
import {CountryDayInfo} from '../../../model/country-day-info';

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
  chartOptions: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
    this.chartDatasets.push(
      { data: this.getTotal(this.statistics), label: 'Total confirmed'},
    );

    this.chartColors.push(
      {
        backgroundColor: 'rgba(255, 0, 0, .2)',
        borderColor: 'rgba(255, 0, 0, .7)',
        borderWidth: 2,
        id: 'red',
      }
    );
    this.chartLabels = this.dates;
  }

  toggleTotal = () => {
    if (this.totalOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label !== 'Total confirmed';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id !== 'red';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(255, 0, 0, .2)',
        borderColor: 'rgba(255, 0, 0, .7)',
        borderWidth: 2,
        id: 'red',
      });
      this.chartDatasets.push({ data: this.getTotal(this.statistics), label: 'Total confirmed'});
    }
    this.totalOn = !this.totalOn;
  }

  toggleDeaths = () => {
    if (this.deathsOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label !== 'Total deaths';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id !== 'black';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(0, 0, 0, .2)',
        borderColor: 'rgba(0, 0, 0, .7)',
        borderWidth: 2,
        id: 'black',
      });
      this.chartDatasets.push({ data: this.getDeaths(this.statistics), label: 'Total deaths'});
    }
    this.deathsOn = !this.deathsOn;
  }

  toggleRecovered = () => {
    if (this.recoveredOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label !== 'Total recovered';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id !== 'green';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(0, 255, 0, .2)',
        borderColor: 'rgba(0, 255, 0, .7)',
        borderWidth: 2,
        id: 'green',
      });
      this.chartDatasets.push({ data: this.getRecovered(this.statistics), label: 'Total recovered'});
    }
    this.recoveredOn = !this.recoveredOn;
  }

  toggleActive = () => {
    if (this.activeOn){
      this.chartDatasets = this.chartDatasets.filter(value => {
        return value.label !== 'Active cases';
      });
      this.chartColors = this.chartColors.filter(value => {
        return value.id !== 'yellow';
      });
    }
    else {
      this.chartColors.push({backgroundColor: 'rgba(255, 165, 0, .2)',
        borderColor: 'rgba(255, 165, 0, .7)',
        borderWidth: 2,
        id: 'yellow',
      });
      this.chartDatasets.push({ data: this.getActive(this.statistics), label: 'Active cases'});
    }
    this.activeOn = !this.activeOn;
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

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
