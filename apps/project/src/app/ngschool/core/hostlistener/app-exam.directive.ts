import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appExam]'
})
export class AppExamDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') onMouseover() {
    this.changebgcolor('red', 'orange');
    this.addClass();
  }

  @HostListener('mouseleave') onMouseleave() {
    this.changebgcolor('black', 'yellow');
    this.removeClass();
  }

  changebgcolor(color: string, bg: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'background', bg);
  }

  addClass() {
    this.renderer.addClass(this.el.nativeElement, 'letter');
  }

  removeClass() {
    this.renderer.removeClass(this.el.nativeElement, 'letter');
  }

}
