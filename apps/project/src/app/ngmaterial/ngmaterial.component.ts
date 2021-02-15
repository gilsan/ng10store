import { Component, OnInit } from '@angular/core';

export interface NavItem {
  displayName: string;
  displaed?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-ngmaterial',
  templateUrl: './ngmaterial.component.html',
  styleUrls: ['./ngmaterial.component.scss']
})
export class NgmaterialComponent implements OnInit {

  opened = false;
  menu: NavItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.opened = !this.opened;
  }

}
