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
import { TableResizeComponent } from './components/table-resize/table-resize.component';
// import { ResizeComponent } from './components/resize/resize.component';
// import { ResizableDirective } from './components/resizable.directive';
import { ResizableModule } from './components/resizable/resizable.module';
import { MaterialModule } from '../material.module';
import { RxjscourseComponent } from './components/rxjscourse/rxjscourse.component';
import { CourseCardListComponent } from './components/rxjscourse/course-card-list/course-card-list.component';
import { CourseComponent } from './components/rxjscourse/course/course.component';
import { EidtCourseDialogComponent } from './components/rxjscourse/eidt-course-dialog/eidt-course-dialog.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoginComponent } from './components/rxjscourse/login/login.component';
import { RegisterComponent } from './components/rxjscourse/register/register.component';
@NgModule({
  declarations: [
    NgschoolComponent,
    HostlistenerComponent,
    AppExamDirective,
    LocalStorageComponent,
    SweetAlertComponent,
    PixijsComponent,
    TableResizeComponent,
    RxjscourseComponent,
    CourseCardListComponent,
    CourseComponent,
    EidtCourseDialogComponent,
    LoginComponent,
    RegisterComponent


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    NgschoolRouting,
    ResizableModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  entryComponents: [
    EidtCourseDialogComponent,
    RegisterComponent
  ]
})
export class NgschoolModule { }