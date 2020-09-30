import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-clip-path-circle',
  templateUrl: './clip-path-circle.component.html',
  styleUrls: ['./clip-path-circle.component.scss']
})
export class ClipPathCircleComponent implements OnInit {

  constructor(
    private el: ElementRef,
  ) { }

  @HostListener('mousemove', ['$event'])
  onMousemove(e) {
    // console.log(e);
    this.el.nativeElement.style.setProperty('--x', e.clientX + 'px');
    this.el.nativeElement.style.setProperty('--y', e.clientY + 'px');
  }

  ngOnInit(): void {
  }

}
