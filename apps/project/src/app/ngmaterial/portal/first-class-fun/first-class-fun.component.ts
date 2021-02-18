import { Component, OnInit } from '@angular/core';
import { FirstClassService } from './first.service';

@Component({
  selector: 'app-first-class-fun',
  templateUrl: './first-class-fun.component.html',
  styleUrls: ['./first-class-fun.component.scss']
})
export class FirstClassFunComponent implements OnInit {
  product = ['사과', '배', '포도'];
  msg = "test";
  constructor(
    private service: FirstClassService
  ) { }

  ngOnInit(): void {
    // this.service.onConnect(() => {
    //   console.log('first class');
    // });
    this.service.onOffer(() => {
      this.initalize(this.product);
    });
  }

  initalize(product: string[]) {

    product.forEach(item => {
      console.log(item);
    });
  }

}
