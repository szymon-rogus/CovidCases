import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/generalConstants/Constants';
import {StylingService} from '../../services/styling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = Constants.TITLE;

  constructor(public stylingService: StylingService) {}

  ngOnInit(): void {}

  onSwipe = () => {
    this.stylingService.changeMode();
  }

}
