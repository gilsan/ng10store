import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  item1() {
    console.log('click item1');
    this.isOpen = false;
    alert('click item1...');
  }

  item2() {
    console.log('click item2');
    this.isOpen = false;
  }

  item3() {
    console.log('click item3');
    this.isOpen = false;
  }

}
