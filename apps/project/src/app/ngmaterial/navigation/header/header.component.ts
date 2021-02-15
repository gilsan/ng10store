import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleOpenSidenav(): void {
    this.SideNavigationToggle.emit(null);
  }

}
