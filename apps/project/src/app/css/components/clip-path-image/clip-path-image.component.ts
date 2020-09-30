import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip-path-image',
  templateUrl: './clip-path-image.component.html',
  styleUrls: ['./clip-path-image.component.scss']
})
export class ClipPathImageComponent implements OnInit {

  constructor(
    private el: ElementRef,
  ) { }

  @HostListener('mousemove', ['$event'])
  onMousemove(e) {
    //  console.log(e);
    this.el.nativeElement.style.setProperty('--x', e.clientX + 'px');
    this.el.nativeElement.style.setProperty('--y', e.clientY + 'px');
  }

  ngOnInit(): void {
  }

}
