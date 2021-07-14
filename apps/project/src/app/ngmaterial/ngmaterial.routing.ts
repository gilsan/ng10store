import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NgmaterialComponent } from "./ngmaterial.component";
import { PortalComponent } from './portal/portal.component';
import { OverlayComponent } from './overlay/overlay.component';
import { TableComponent } from './table/table.component';
import { PieCustomDataComponent } from "./components/pie-custom-data/pie-custom-data.component";
const routes: Routes = [
  {
    path: '', component: NgmaterialComponent, children: [
      { path: 'portal', component: PortalComponent },
      { path: 'overlay', component: OverlayComponent },
      { path: 'table', component: TableComponent },
      {
        path: 'd3', children: [
          { path: 'piechart', component: PieCustomDataComponent },
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class NgmaterialRoutingModule {
}

