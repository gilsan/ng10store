import { Component, ElementRef, OnInit, ViewChild, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-scroll-effect',
  templateUrl: './scroll-effect.component.html',
  styleUrls: ['./scroll-effect.component.scss']
})
export class ScrollEffectComponent implements OnInit {

  @ViewChild('banner') banner: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log(event);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const value = 1200 - window.scrollY;
      this.renderer.setStyle(this.banner.nativeElement, 'clipPath', 'circle(' + value + 'px at center center');
    });
  }

  backToCss() {
    this.router.navigate(['/css']);
  }

}
