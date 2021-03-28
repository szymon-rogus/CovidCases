import { Component, OnInit } from '@angular/core';
import {SorterService} from "../../services/sorter.service";

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

  constructor(private sorterService : SorterService) { }

  ngOnInit(): void {
  }

  setSorter = (value: string, reverse: boolean) => {
    this.sorterService.sortBy.emit(value);
    this.sorterService.reverse.emit(reverse);

    this.changeDirection(value);
  }

  private changeDirection = (value: string) => {
    switch (value) {
      case 'TotalConfirmed':
        this.upConfirmed = !this.upConfirmed;
        break;
      case 'TotalDeaths':
        this.upDeaths = !this.upDeaths;
        break;
      case 'TotalRecovered':
        this.upRecovered = !this.upRecovered;
        break;
      default:
        this.upName = !this.upName;
        break;
    }
  }
}
