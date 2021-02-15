import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NgmaterialComponent } from "./ngmaterial.component";
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: '', component: NgmaterialComponent, children: [
      { path: 'portal', component: PortalComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgmaterialRoutingModule {
}

