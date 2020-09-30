import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-split-image',
  templateUrl: './split-image.component.html',
  styleUrls: ['./split-image.component.scss']
})
export class SplitImageComponent implements OnInit, AfterViewInit {

  imageName: string[] = [
    'assets/split-image/now.jpg',
    'assets/split-image/photo_4.jpg',
    'assets/split-image/no.jpg',
    'assets/split-image/yes.jpg'
  ];



  private width = 960;
  private height = 538;  // 538
  private numberOfBlinds = 50;
  private margin = 2;
  private color = '#fff';
  private gapHeight = 100;


  activeImage = 0;
  changeOccuredOnce = false;

  tempEls: ElementRef[] = [];

  @ViewChild('container') container: ElementRef;

  @ViewChild('img1') img1: ElementRef;
  @ViewChild('img2') img2: ElementRef;
  @ViewChild('img3') img3: ElementRef;
  @ViewChild('img4') img4: ElementRef;

  @ViewChildren('img', { read: ElementRef }) img: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.tempEls = this.img.toArray();
    this.width = this.container.nativeElement.clientWidth;

    this.renderer.setStyle(this.container.nativeElement, 'width', this.width);
    this.renderer.setStyle(this.container.nativeElement, 'height', this.height);

    this.tempEls.forEach((el, index) => {
      this.splitImage(el);
    });

    this.showHide();

  }

  showHide() {
    this.allDeactive();

    this.renderer.addClass(this.tempEls[this.activeImage].nativeElement, 'active');
    this.activeImage = (this.activeImage + 1) % this.img.length;
    setTimeout(() => {
      this.showHide();
    }, 6000);
    // const borders = this.calculateBorders();
  }

  allDeactive() {
    for (let i = 0; i < this.tempEls.length; i++) {
      this.renderer.removeClass(this.tempEls[i].nativeElement, 'active');
    }
  }

  splitImage(el: ElementRef) {
    const blindWidth = this.width / this.numberOfBlinds;

    for (let i = 1; i <= this.numberOfBlinds; i++) {
      const tempEl = this.renderer.createElement('span');
      const borders = this.calculateBorders();

      this.renderer.setStyle(tempEl, 'right', Math.floor(i * blindWidth) + 'px');
      this.renderer.setStyle(tempEl, 'border', this.margin + 'px solid ' + this.color);
      this.renderer.setStyle(tempEl, 'border-top', borders.borderWidthTop + 'px solid ' + this.color);
      this.renderer.setStyle(tempEl, 'border-bottom', borders.borderWidthBottom + 'px solid ' + this.color);
      this.renderer.setStyle(tempEl, 'height', this.height + 'px');
      this.renderer.setStyle(tempEl, 'width', blindWidth + 'px');
      //this.renderer.setStyle(tempEl, 'animation', 'split-image 1s ease-in-out 0.3s infinite');

      this.renderer.insertBefore(this.container.nativeElement, tempEl, this.container.nativeElement.firstChild);
    }
    // setTimeout(() => this.showHide(), 3000)
  }

  calculateBorders() {
    const random = Math.floor((Math.random() * 9) + 1);
    const borderWidthTop = (random / 10) * this.gapHeight;
    const borderWidthBottom = this.gapHeight - borderWidthTop;
    //  console.log(borderWidthTop + '  ' + borderWidthBottom);
    return { borderWidthTop: borderWidthTop, borderWidthBottom: borderWidthBottom };
  }

}
