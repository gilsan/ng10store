import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "@clr/angular";

import { NgschoolRouting } from './ngschool.routing';

import { NgschoolComponent } from './ngschool/ngschool.component';
import { HostlistenerComponent } from './core/hostlistener/hostlistener.component';
import { AppExamDirective } from './core/hostlistener/app-exam.directive';
import { LocalStorageComponent } from './core/local-storage/local-storage.component';
import { SweetAlertComponent } from './utils/sweet-alert/sweet-alert.component';
import { PixijsComponent } from './components/pixijs/pixijs.component';




@NgModule({
  declarations: [
    NgschoolComponent,
    HostlistenerComponent,
    AppExamDirective,
    LocalStorageComponent,
    SweetAlertComponent,
    PixijsComponent,



  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    NgschoolRouting,
  ],
})
export class NgschoolModule { }