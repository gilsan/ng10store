import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { OpencvService } from '../services/opencv.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit, OnDestroy {

  url: string;
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  public opencvImg$: Observable<any>
  constructor(
    public service: OpencvService
  ) { }



  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.url = '';
  }



}
