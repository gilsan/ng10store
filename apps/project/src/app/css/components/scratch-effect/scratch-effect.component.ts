import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-scratch-effect',
  templateUrl: './scratch-effect.component.html',
  styleUrls: ['./scratch-effect.component.scss']
})
export class ScratchEffectComponent implements OnInit {

  @ViewChild('container') container: ElementRef;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousemove', ['$event'])
  onMousemove(e) {
    //  console.log(e);
    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'left', e.offsetX + 'px');
    this.renderer.setStyle(span, 'top', e.offsetY + 'px');
    this.renderer.appendChild(this.container.nativeElement, span);

    // this.el.nativeElement.style.setProperty('--x', e.offsetX + 'px');
    // this.el.nativeElement.style.setProperty('--y', e.offsetY + 'px');
  }

  ngOnInit(): void {
  }

}
