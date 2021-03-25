import { Component, OnInit } from '@angular/core';
import { olMenu } from '../../../shared/models/menu-list';
import { NavItem } from '../../../shared/models/nav-item';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss']
})
export class GestureComponent implements OnInit {
  opened = false;
  menu: NavItem[] = olMenu;
  imageDesc = '홈';
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.opened = !this.opened;
  }

}
