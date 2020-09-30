import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ClarityModule } from "@clr/angular";
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from './../shared/shared.module';
import { WINDOW_PROVIDERS } from '../shared/window.service';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [

    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    // ClarityModule,
    SharedModule,
    NgxTypedJsModule,

  ],
  providers: [
    // QuizService,


  ]
})
export class HomeModule { }
