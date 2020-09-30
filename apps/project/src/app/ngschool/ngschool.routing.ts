import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostlistenerComponent } from './core/hostlistener/hostlistener.component';
import { LocalStorageComponent } from './core/local-storage/local-storage.component';

import { NgschoolComponent } from './ngschool/ngschool.component';
import { SweetAlertComponent } from './utils/sweet-alert/sweet-alert.component';
import { PixijsComponent } from './components/pixijs/pixijs.component';

const routes: Routes = [
  {
    path: '', component: NgschoolComponent, children: [
      { path: 'hostlistener', component: HostlistenerComponent },
      { path: 'local-storage', component: LocalStorageComponent },
      { path: 'sweet-alert', component: SweetAlertComponent },
      {
        path: 'components', children: [
          { path: 'pixijs', component: PixijsComponent },
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