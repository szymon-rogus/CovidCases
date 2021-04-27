import {Component, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {StylingService} from '../../services/styling.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;

  constructor(private filterService: FilterService,
              public stylingService: StylingService) {
  }

  ngOnInit(): void {}

  filterByName = () => {
    this.filterService.filterName.emit(this.name);
  }
}
