import { Component, OnInit } from '@angular/core';
import { GetterSetter } from './setterGetter';
@Component({
  selector: 'app-setter-getter',
  templateUrl: './setter-getter.component.html',
  styleUrls: ['./setter-getter.component.scss']
})
export class SetterGetterComponent implements OnInit {
  initValue: number[];
  getSetterValue: number[];
  getGetterValue: number[];

  myArr = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
    const getterSetter = new GetterSetter(this.myArr);
    this.initValue = getterSetter.getfirstElem;
    console.log(this.getSetterValue);
    getterSetter.setfirstElement = 100;
    this.getSetterValue = getterSetter.getfirstElem;
    console.log(this.getSetterValue);
  }

}
