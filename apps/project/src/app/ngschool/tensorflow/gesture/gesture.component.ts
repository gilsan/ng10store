import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { olMenu } from '../../../shared/models/menu-list';
import { NavItem } from '../../../shared/models/nav-item';
import { HandGesture } from './../hand-gesture.service';
import { Router } from '@angular/router';
import { delay, filter, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss']
})
export class GestureComponent implements OnInit, AfterViewInit {
  opened = false;
  menu: NavItem[] = olMenu;
  // imageDesc = '홈';
  showFiller = false;

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('sidenav') sidenav: MatDrawer;
  opened$: Observable<boolean>;

  selection$ = this._recognizer.gesture$.pipe(
    filter((value) => value === 'one' || value === 'two'),
    map(value => (value === 'one' ? 'home-made' : 'about'))
  );


  constructor(
    private _recognizer: HandGesture,
    private _router: Router,
    private zone: NgZone
  ) {
    this._recognizer.gesture$
      .pipe(
        filter((value) => value === 'ok'),
        withLatestFrom(this.selection$)
      ).subscribe(([_, page]) => {
        console.log(page);
        this.sidenav.toggle();
        const url = `/ngschool/tensor/${page}`;
        this._router.navigateByUrl(url);
      });

    this.zone.runOutsideAngular(() => {
      this.opened$ = this._recognizer.swipe$.pipe(
        filter((value) => value === 'left' || value === 'right'),
        map(value => value === 'right')
      );
    })
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this._recognizer.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );


  }

  toggle(): void {
    this.opened = !this.opened;
  }



  get stream() {
    return this._recognizer.stream;
  }

}
