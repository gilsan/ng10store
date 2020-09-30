import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  height = 0;
  @ViewChild('MenuItems') menuItems: ElementRef;
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  menutoggle() {
    if (this.height === 0) {
      this.renderer.setStyle(this.menuItems.nativeElement, 'maxHeight', '200px');
      this.height = 200;
    } else {
      this.renderer.setStyle(this.menuItems.nativeElement, 'maxHeight', '0px');
      this.height = 0;
    }
  }

}
