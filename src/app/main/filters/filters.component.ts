import {Component, HostListener, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  name: string;
  resize = true;

  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
  }

  filterByName = () => {
    this.filterService.filterName.emit(this.name);
  }

  @HostListener('window:resize', ['$event'])
  onResize = (event) => {
    this.resize = !(event.target.innerWidth < 1800 && event.target.innerWidth >= 1200);
  }
}
