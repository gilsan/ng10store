import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.scss']
})
export class MultiStepComponent implements OnInit {

  @ViewChild('form1') form1: ElementRef;
  @ViewChild('form2') form2: ElementRef;
  @ViewChild('form3') form3: ElementRef;

  @ViewChild('progress') progress: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  onNext1() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '-450px');
    this.renderer.setStyle(this.form2.nativeElement, 'left', '40px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '240px');
  }

  onNext2() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '-450px');
    this.renderer.setStyle(this.form3.nativeElement, 'left', '40px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '360px');
  }

  onBack1() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '40px');
    this.renderer.setStyle(this.form2.nativeElement, 'left', '450px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '120px');
  }
  onBack2() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '40px');
    this.renderer.setStyle(this.form3.nativeElement, 'left', '450px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '240px');
  }

}
