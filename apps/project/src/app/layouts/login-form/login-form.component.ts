import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  @ViewChild('container') container: ElementRef;

  @ViewChild('login') login: ElementRef;
  @ViewChild('signup') signup: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  toggle(type: string) {
    if (type === 'signup') {
      this.renderer.addClass(this.container.nativeElement, 'active');
      this.renderer.addClass(this.login.nativeElement, 'active');
      this.renderer.addClass(this.signup.nativeElement, 'active');
    } else if (type === 'login') {
      this.renderer.removeClass(this.container.nativeElement, 'active');
      this.renderer.removeClass(this.signup.nativeElement, 'active');
    }
  }

}
