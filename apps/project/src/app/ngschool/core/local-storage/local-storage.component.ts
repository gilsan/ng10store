import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  title = "초기값";

  constructor() { }

  ngOnInit(): void {
    // this.getItem();
  }

  add() {
    this.title = "로컬저장소에 저장된 내용";
    localStorage.setItem("token", this.title);
    this.getItem();
  }

  getItem() {
    this.title = localStorage.getItem("token");
  }

  remove() {
    localStorage.removeItem("token");
    this.getItem();
    this.title = "초기값";
  }

}
