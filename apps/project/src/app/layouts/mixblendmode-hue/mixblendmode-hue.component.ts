import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixblendmode-hue',
  templateUrl: './mixblendmode-hue.component.html',
  styleUrls: ['./mixblendmode-hue.component.scss']
})
export class MixblendmodeHueComponent implements OnInit {

  contents = ['이곳을 지나가 보세요. 차 색이 바뀜니다.',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
