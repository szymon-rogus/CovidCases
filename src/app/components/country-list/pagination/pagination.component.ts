import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StylingService} from '../../../services/styling.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page = 1;
  @Output() actualPage = new EventEmitter<number>();

  constructor(public stylingService: StylingService) {}

  ngOnInit(): void {}

  changePage = (value: number) => {
    this.actualPage.emit(value);
  }
}
