import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestureComponent } from './gesture/gesture.component';
import { HomeMadeComponent } from './home-made/home-made.component';


const routes: Routes = [
  {
    path: '', component: GestureComponent, children: [
      { path: 'home-made', component: HomeMadeComponent }
    ]
  },
  { path: '**', redirectTo: '/ngschool/tensor' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TensorRouting {

}