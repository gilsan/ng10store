import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-sliding-text',
  templateUrl: './sliding-text.component.html',
  styleUrls: ['./sliding-text.component.scss']
})
export class SlidingTextComponent implements OnInit {


  @ViewChild('slider') slider: ElementRef;
  @ViewChild('active') active: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  line1() {
    this.slider.nativeElement.style.transform = 'translateX(0)';
    this.active.nativeElement.style.top = '0px';
  }

  line2() {
    this.slider.nativeElement.style.transform = 'translateX(-25%)';
    this.active.nativeElement.style.top = '80px';
  }

  line3() {
    this.slider.nativeElement.style.transform = 'translateX(-50%)';
    this.active.nativeElement.style.top = '160px';
  }

  line4() {
    this.slider.nativeElement.style.transform = 'translateX(-75%)';
    this.active.nativeElement.style.top = '240px';
  }


}
