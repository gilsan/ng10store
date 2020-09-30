import { Component, OnInit } from '@angular/core';
/****
 * git remote add origin https://github.com/gilsan/ng10store.git
git branch -M master
git push -u origin master
 * 
 */

@Component({
  selector: 'newarea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
    document.cookie = 'safeCookie=foo; SameSite=Lax';
  }

  ngOnInit() { }


}
