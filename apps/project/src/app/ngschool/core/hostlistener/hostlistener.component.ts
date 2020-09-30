import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.scss']
})
export class HostlistenerComponent implements OnInit {

  title = "앵귤러 학교";

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }


  @ViewChild('h1') myH1: ElementRef;
  ngOnInit(): void { }

  @HostListener('click') onClick() {
    alert('clicked');
  }





}
