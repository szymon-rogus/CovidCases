import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page: number = 1;
  @Output('actualPage') newPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage = (value: number) => {
    this.newPage.emit(value);
  }
}
