import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { GestureComponent } from './gesture/gesture.component';
import { HomeMadeComponent } from './home-made/home-made.component';
import { TensorRouting } from './tensor.routing';

@NgModule({
   declarations: [GestureComponent, HomeMadeComponent],
   imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      TensorRouting
   ],
})
export class TensorflowModule {

}