import {Component, OnInit} from '@angular/core';

import {StylingService} from '../../services/styling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public stylingService: StylingService) {}

  ngOnInit(): void {}
}
