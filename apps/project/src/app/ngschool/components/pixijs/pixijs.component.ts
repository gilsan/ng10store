import { Component, OnInit, ElementRef, NgZone, Input, HostListener, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-pixijs',
  templateUrl: './pixijs.component.html',
  styleUrls: ['./pixijs.component.scss']
})
export class PixijsComponent implements OnInit, OnDestroy {


  app: Application;
  img: Sprite;
  img2: Sprite;
  displacementFilter;
  displacementSprite: Sprite;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;


  @ViewChild('pixi') pixi: ElementRef;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application({ width: 1000, height: 600, })
    });


    this.el.nativeElement.appendChild(this.app.view);

    this.img = Sprite.from("../../../assets/easy_tutorial/car.png");
    this.app.stage.addChild(this.img);



    this.displacementSprite = Sprite.from("../../../assets/easy_tutorial/cloude.jpg");
    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.app.stage.addChild(this.displacementSprite);
    this.app.stage.filters = [this.displacementFilter];

    this.app.renderer.view.style.transform = 'scale(1.02)';
    this.displacementSprite.scale.x = 4;
    this.displacementSprite.scale.y = 4;


    this.animate();
  }



  animate() {

    this.displacementSprite.x += 10;
    this.displacementSprite.y += 4;
    requestAnimationFrame(this.animate);
  }

  @HostListener('window:resize')
  public resize() {
    console.log('window resize.....')
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(400, 300);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
  }

  @HostListener('mousemove', ['$event'])
  public onMousemove(e) {
    // console.log(e);
    this.displacementFilter.scale.x = (window.innerWidth - e.clientX) / 20;
    this.displacementFilter.scale.y = (window.innerHeight - e.clientY) / 20;
  }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy() {
    this.destroy();
  }

}
