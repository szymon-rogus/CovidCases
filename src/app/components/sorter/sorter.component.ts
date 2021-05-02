import {Component, HostListener, OnInit} from '@angular/core';

import {SorterService} from '../../services/sorter.service';
import {Direction} from './Direction';
import {StylingService} from '../../services/styling.service';
import {ColumnToggleService} from '../../services/column-toggle.service';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  icons: boolean;
  activeColumn: string;
  upName: Direction = Direction.ASC;
  upConfirmed: Direction = Direction.DEFAULT;
  upDeaths: Direction = Direction.DEFAULT;
  upRecovered: Direction = Direction.DEFAULT;
  upActive: Direction = Direction.DEFAULT;

  constructor(private sorterService: SorterService, public stylingService: StylingService, public columnToggle: ColumnToggleService) {}

  ngOnInit(): void {
    this.activeColumn = 'confirmed';
    this.onResize();
    this.onChange('confirmed');
  }

  setSorter = (value: string, reverse: Direction) => {
    this.sorterService.sortBy.emit(value);
    this.sorterService.reverse.emit(this.getReverse(reverse));

    this.updateSorter(value);
  }

  private getReverse = (sorter: Direction) => {
    return sorter === Direction.DESC;
  }

  private updateSorter = (value: string) => {
    if (value !== 'Country') {
      this.upName = Direction.DEFAULT;
    }
    if (value !== 'confirmed') {
      this.upConfirmed = Direction.DEFAULT;
    }
    if (value !== 'deaths') {
      this.upDeaths = Direction.DEFAULT;
    }
    if (value !== 'recovered') {
      this.upRecovered = Direction.DEFAULT;
    }
    if (value !== 'active') {
      this.upActive = Direction.DEFAULT;
    }
  }

  getNext = (sorter: Direction) => {
    return sorter === Direction.ASC ? Direction.DESC : Direction.ASC;
  }

  checkDirection = (sorter: Direction) => {
    switch (sorter) {
      case Direction.ASC:
        return 'fa fa-sort-asc';
      case Direction.DESC:
        return 'fa fa-sort-desc';
      default:
        return 'fa fa-sort';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.icons = window.innerWidth < 767 && window.innerWidth > 576;
  }

  onChange(event) {
    this.columnToggle.selectedColumn.emit(event);
    console.log(event);
  }
}
