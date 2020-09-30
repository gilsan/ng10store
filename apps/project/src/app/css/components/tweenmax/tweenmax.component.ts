import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

import { TimelineLite, TweenLite, Back, Power1 } from 'gsap'

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-tweenmax',
  templateUrl: './tweenmax.component.html',
  styleUrls: ['./tweenmax.component.scss']
})
export class TweenmaxComponent implements OnInit, AfterViewInit {

  @ViewChild('box1') box1: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    const tl: TimelineLite = new TimelineLite();
    this.renderer.setStyle(this.box1.nativeElement, 'background-color', 'red');

    TweenLite.to(this.box1.nativeElement, 3, { scale: 3 });
  }

}
