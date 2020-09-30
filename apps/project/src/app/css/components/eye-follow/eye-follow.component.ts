import { Component, HostListener, OnInit, ElementRef, ViewChild, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-eye-follow',
  templateUrl: './eye-follow.component.html',
  styleUrls: ['./eye-follow.component.scss']
})
export class EyeFollowComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) { }

  @ViewChild('audio') audio: ElementRef;
  @ViewChild('face') face: ElementRef;
  @ViewChildren('eye', { read: ElementRef }) eyes: QueryList<ElementRef>;

  contents = ['마우스를 움직여 주세요.'];

  @HostListener('mousemove', ['$event'])
  onMousemove(e) {
    //  console.log(e);
    const tempEl = this.eyes.toArray();
    this.eyes.toArray().forEach((eye) => {
      const x = (eye.nativeElement.getBoundingClientRect().left) + (eye.nativeElement.clientWidth / 2);
      const y = (eye.nativeElement.getBoundingClientRect().top) + (eye.nativeElement.clientHeight / 2);
      const radian = Math.atan2(e.pageX - x, e.pageY - y);
      const rot = (radian * (180 / Math.PI) * -1) + 270;
      this.renderer.setStyle(eye.nativeElement, 'transform', 'rotate(' + rot + 'deg)');
    });

    const face_start_x = this.face.nativeElement.getBoundingClientRect().left;
    const face_end_x = this.face.nativeElement.getBoundingClientRect().left + this.face.nativeElement.clientWidth;

    const face_start_y = this.face.nativeElement.getBoundingClientRect().top;
    const face_end_y = this.face.nativeElement.getBoundingClientRect().left + this.face.nativeElement.clientHeight;

    if (e.clientX > face_start_x && e.clientX < face_end_x && e.clientY > face_start_y && e.clientY < face_end_y) {
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
      this.audio.nativeElement.volume = 0.02;

    }
  }

  ngOnInit(): void {
  }

}
