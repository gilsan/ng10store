import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-sliding-menu',
  templateUrl: './sliding-menu.component.html',
  styleUrls: ['./sliding-menu.component.scss']
})
export class SlidingMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('marker') marker: ElementRef

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  mouseOver(e) {
    const top = e.target.offsetTop - 5;
    this.renderer.setStyle(this.marker.nativeElement, 'top', top + 'px');
    this.renderer.setStyle(this.marker.nativeElement, 'width', e.target.offsetWidth + 'px');
  }

}
