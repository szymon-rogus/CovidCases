import {Component, Input, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {StylingService} from '../../services/styling.service';
import {Country} from '../../model/Country';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;
  @Input() countryList: Country[];

  constructor(private filterService: FilterService,
              public stylingService: StylingService) {
  }

  ngOnInit(): void {}

  filterByName = () => {
    this.filterService.filterName.emit(this.name);
  }
}
