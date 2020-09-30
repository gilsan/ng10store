import { Component, OnInit } from '@angular/core';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-panzoom',
  templateUrl: './panzoom.component.html',
  styleUrls: ['./panzoom.component.scss']
})
export class PanzoomComponent implements OnInit {

  panZoomConfig: PanZoomConfig = new PanZoomConfig();
  constructor() { }

  ngOnInit(): void {
  }

}
