import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { GlobalData } from 'src/app/model/global';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  globalData : GlobalData;

  constructor(private globalDataService : GlobalDataService) { }

  ngOnInit(): void {
    this.globalDataService.getGlobalData()
        .subscribe(data => {
          this.globalData = data.Global;
        });
  }

}
