import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import '@google/model-viewer/dist/model-viewer';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ar-effect',
  templateUrl: './ar-effect.component.html',
  styleUrls: ['./ar-effect.component.scss']
})
export class ArEffectComponent implements OnInit {

  @ViewChild('model') modelViewer: ElementRef;
  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {

  }

  stop() {
    this.renderer.setProperty(this.modelViewer.nativeElement, 'animationName', 'none');
  }

  run() {
    this.renderer.setProperty(this.modelViewer.nativeElement, 'animationName', 'Running');
  }

  wave() {
    this.renderer.setProperty(this.modelViewer.nativeElement, 'animationName', 'Wave');
  }

}
