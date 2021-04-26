import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/generalConstants/Constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = Constants.TITLE;

  constructor() {}

  ngOnInit(): void {}

}
