import { Component, ElementRef, OnInit, QueryList, ViewChildren, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  currentIndex = 0;
  @ViewChildren('serviceTab') servicetap: QueryList<ElementRef>;
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  slide(idx: number) {
    this.servicetap.forEach((tap, index) => {
      this.renderer.setStyle(tap.nativeElement, 'z-index', 0);
      this.renderer.removeClass(tap.nativeElement, 'show');
    });
    const tempEl = this.servicetap.find((el, index) => index === idx);
    this.renderer.setStyle(tempEl.nativeElement, 'z-index', 2);
    this.renderer.addClass(tempEl.nativeElement, 'show');

    const currentEl = this.servicetap.find((el, index) => index === this.currentIndex);
    this.renderer.setStyle(currentEl.nativeElement, 'z-index', 1);

    this.currentIndex = idx;
  }


}
