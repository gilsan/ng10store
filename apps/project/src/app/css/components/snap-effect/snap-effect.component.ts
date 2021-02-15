import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-effect',
  templateUrl: './snap-effect.component.html',
  styleUrls: ['./snap-effect.component.scss']
})
export class SnapEffectComponent implements OnInit {

  contents = ['그림위에 마우스를 올려 보세요...'];
  constructor() { }

  ngOnInit(): void {
  }

}
