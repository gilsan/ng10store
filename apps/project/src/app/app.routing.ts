import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'css', children: [
      { path: '', loadChildren: () => import('./css/css.module').then((m) => m.CssModule) },
    ],
  },
  {
    path: 'ngschool', children: [
      { path: '', loadChildren: () => import('./ngschool/ngschool.module').then((m) => m.NgschoolModule) },
    ],
  },


]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {

}