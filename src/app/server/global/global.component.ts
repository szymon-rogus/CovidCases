import {Component, Input, OnInit} from '@angular/core';
import { GlobalData } from 'src/app/model/global';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  @Input() globalData : GlobalData;

  constructor() { }

  ngOnInit(): void {

  }
}
