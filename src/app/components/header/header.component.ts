import {Component, HostListener, OnInit} from '@angular/core';

import {Constants} from '../../shared/generalConstants/Constants';
import {StylingService} from '../../services/styling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle: string;
  toggleMode: boolean;
  toggleWidth: number;
  toggleHeight: number;

  constructor(public stylingService: StylingService, private constants: Constants) {
    this.headerTitle = constants.TITLE;
  }

  ngOnInit(): void {
    this.toggleMode = this.stylingService.darkMode;
    this.onResize();
  }

  onSwipe = () => {
    this.stylingService.changeMode();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth > 1200) {
      this.toggleWidth = 50;
      this.toggleHeight = 26;
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 768) {
      this.toggleWidth = 45;
      this.toggleHeight = 24;
    }
    if (window.innerWidth <= 767) {
      this.toggleWidth = 40;
      this.toggleHeight = 22;
    }
  }
}
