import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NgmaterialComponent } from "./ngmaterial.component";
import { PortalComponent } from './portal/portal.component';
import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  {
    path: '', component: NgmaterialComponent, children: [
      { path: 'portal', component: PortalComponent },
      { path: 'overlay', component: OverlayComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgmaterialRoutingModule {
}

