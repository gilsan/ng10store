import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgmaterialRoutingModule } from './ngmaterial.routing';
import { MaterialModule } from '../material.module';
import { PortalComponent } from './portal/portal.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavbarsComponent } from './navigation/navbars/navbars.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NgmaterialComponent } from './ngmaterial.component';


@NgModule({
  declarations: [
    NgmaterialComponent,
    SidenavListComponent,
    NavbarsComponent,
    HeaderComponent,
    PortalComponent
  ],
  imports: [

    CommonModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgmaterialRoutingModule,
    MaterialModule,
  ]
})

export class NgmaterialModule { }
