import { Component, HostListener, OnInit, } from '@angular/core';

import { olMenu } from '../shared/models/menu-list';
import { NavItem } from './models/nav-item';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened = false;
  menu: NavItem[] = olMenu;
  imageDesc = '홈';

  contents = ['환영합니다.',
    '페이지 개발환경 입니다.', 'Angular 10 RxJS, 웹서버: Firebase Node.js 12.0, 디비: FireStore/EC2 MySQL',
    'Web Hosting Server: AWS S3'];
  constructor() { }

  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll .....');
  }


  ngOnInit() { }

  toggle() {
    this.opened = !this.opened;
  }

  completed() {
    console.log('completed ......');
    this.contents = [];
  };



}
