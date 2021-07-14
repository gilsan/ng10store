import { Component, OnInit } from '@angular/core';
import { IData } from '../../models/pie-data.interface';
import { PiechartService } from '../../services/piechart.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-pie-custom-data',
  templateUrl: './pie-custom-data.component.html',
  styleUrls: ['./pie-custom-data.component.scss']
})
export class PieCustomDataComponent implements OnInit {

  newLabel: string;
  newValue: number;
  data = [];
  constructor(
    private dataService: PiechartService
  ) { }

  ngOnInit(): void {
    this.dataService.$data.subscribe(data => {
      this.data = data;
    })
  }


  addData() {
    console.log(this.newLabel, this.newValue);
    const newData = {
      label: this.newLabel,
      value: this.newValue
    } as IData;

    this.dataService.addData(newData);
  }

}
