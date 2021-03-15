import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostlistenerComponent } from './core/hostlistener/hostlistener.component';
import { LocalStorageComponent } from './core/local-storage/local-storage.component';

import { NgschoolComponent } from './ngschool/ngschool.component';
import { SweetAlertComponent } from './utils/sweet-alert/sweet-alert.component';
import { PixijsComponent } from './components/pixijs/pixijs.component';
import { SetterGetterComponent } from './ES6/setter-getter/setter-getter.component';
import { InjectionTokenComponent } from './core/injection-token/injection-token.component';
import { TableResizeComponent } from './components/table-resize/table-resize.component';
import { RxjscourseComponent } from './components/rxjscourse/rxjscourse.component';

import { CourseComponent } from './components/rxjscourse/course/course.component';
import { CourseResolver } from './components/rxjscourse/course.resolver';
import { LoginComponent } from './components/rxjscourse/login/login.component';

const routes: Routes = [
  {
    path: '', component: NgschoolComponent, children: [
      { path: 'hostlistener', component: HostlistenerComponent },
      { path: 'injection-token', component: InjectionTokenComponent },
      { path: 'local-storage', component: LocalStorageComponent },
      { path: 'sweet-alert', component: SweetAlertComponent },
      { path: 'table-resizable', component: TableResizeComponent },
      {
        path: 'rxjscourse', component: RxjscourseComponent,
      },
      { path: 'courses/:courseUrl', component: CourseComponent, resolve: { course: CourseResolver } },
      { path: 'login', component: LoginComponent },
      {
        path: 'components', children: [
          { path: 'pixijs', component: PixijsComponent },
        ]
      },
      {
        path: 'es6', children: [
          { path: 'setter-getter', component: SetterGetterComponent }
        ]

      },
    ]
  },


];


@NgModule({
  imports: [


    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class NgschoolRouting {

}