import { Component, Inject, OnInit } from '@angular/core';
import { MY_TOKEN_CONFIG, TOKEN_CONFIG, tokenConfig } from './injection.config';

@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrls: ['./injection-token.component.scss'],
  providers: [
    { provide: TOKEN_CONFIG, useValue: MY_TOKEN_CONFIG }
  ]
})
export class InjectionTokenComponent implements OnInit {

  constructor(
    @Inject(TOKEN_CONFIG) public tokenConfig: tokenConfig
  ) { }

  ngOnInit(): void {
    console.log(this.tokenConfig);
  }

}
