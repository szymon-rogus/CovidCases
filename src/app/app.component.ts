import {Component} from '@angular/core';

import {Constants} from './shared/generalConstants/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;

  constructor(private constants: Constants) {
    this.title = constants.TITLE;
  }
}
