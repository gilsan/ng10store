import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @ViewChild('slideImg') slide: ElementRef;

  imagePath = [
    'assets/easy_tutorial/image1.jpg',
    'assets/easy_tutorial/image2.jpg',
    'assets/easy_tutorial/image3.jpg',
    'assets/easy_tutorial/image4.jpg',
    'assets/easy_tutorial/image5.jpg',
    'assets/easy_tutorial/image6.jpg'
  ];

  showImage = 'assets/easy_tutorial/image1.jpg';
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.changeImg();
  }

  changeImg() {
    const source = interval(5000);
    let i = 0;
    const subscribe = source.subscribe(val => {
      if (i > this.imagePath.length - 1) {
        i = 0;
      }
      this.showImage = this.imagePath[i];
      i++;
    })
  }



}
