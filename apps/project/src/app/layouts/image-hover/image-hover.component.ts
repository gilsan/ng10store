import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-image-hover',
  templateUrl: './image-hover.component.html',
  styleUrls: ['./image-hover.component.scss']
})
export class ImageHoverComponent implements OnInit {

  @ViewChild('clip1') clip1: ElementRef;
  @ViewChild('clip2') clip2: ElementRef;
  @ViewChild('clip3') clip3: ElementRef;

  @ViewChild('content1') content1: ElementRef;
  @ViewChild('content2') content2: ElementRef;
  @ViewChild('content3') content3: ElementRef;
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  toggleclip1(type: string) {

    if (type === 'over') {
      this.renderer.addClass(this.clip1.nativeElement, 'fullclip');
      this.renderer.addClass(this.content1.nativeElement, 'main-content');
      this.renderer.removeClass(this.clip2.nativeElement, 'clip2');
      this.renderer.removeClass(this.clip3.nativeElement, 'clip3');

    } else if (type === 'leave') {
      this.renderer.removeClass(this.clip1.nativeElement, 'fullclip');
      this.renderer.removeClass(this.content1.nativeElement, 'main-content');
      this.renderer.addClass(this.clip2.nativeElement, 'clip2');
      this.renderer.addClass(this.clip3.nativeElement, 'clip3');
    }
  }

  toggleclip2(type: string) {

    if (type === 'over') {
      this.renderer.addClass(this.clip2.nativeElement, 'fullclip');
      this.renderer.addClass(this.content2.nativeElement, 'main-content');
      this.renderer.removeClass(this.clip1.nativeElement, 'clip1');
      this.renderer.removeClass(this.clip3.nativeElement, 'clip3');

    } else if (type === 'leave') {
      this.renderer.removeClass(this.clip2.nativeElement, 'fullclip');
      this.renderer.removeClass(this.content2.nativeElement, 'main-content');
      this.renderer.addClass(this.clip1.nativeElement, 'clip1');
      this.renderer.addClass(this.clip3.nativeElement, 'clip3');
    }
  }

  toggleclip3(type: string) {

    if (type === 'over') {
      this.renderer.addClass(this.clip3.nativeElement, 'fullclip');
      this.renderer.addClass(this.content3.nativeElement, 'main-content');
      this.renderer.removeClass(this.clip1.nativeElement, 'clip1');
      this.renderer.removeClass(this.clip2.nativeElement, 'clip2');

    } else if (type === 'leave') {
      this.renderer.removeClass(this.clip3.nativeElement, 'fullclip');
      this.renderer.removeClass(this.content3.nativeElement, 'main-content');
      this.renderer.addClass(this.clip1.nativeElement, 'clip1');
      this.renderer.addClass(this.clip2.nativeElement, 'clip2');
    }
  }

}
