import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerComponent} from "../server.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  @Input() name = '';
  @Output('update') filterName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emit(name: string) {
    this.filterName.emit(name);
  }
}
