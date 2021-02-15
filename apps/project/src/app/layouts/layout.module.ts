import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { SlidingTextComponent } from './sliding-text/sliding-text.component';
import { ArEffectComponent } from './ar-effect/ar-effect.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { MixblendmodeHueComponent } from './mixblendmode-hue/mixblendmode-hue.component';
import { ScrollEffectComponent } from './scroll-effect/scroll-effect.component';
import { CarAnimationComponent } from './car-animation/car-animation.component';
import { FullpageScrollComponent } from './fullpage-scroll/fullpage-scroll.component';
import { PlayMusicComponent } from './play-music/play-music.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NatourComponent } from './natour/natour.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [

    SlidingTextComponent,

    ArEffectComponent,

    ImageSliderComponent,

    LoginFormComponent,

    ImageHoverComponent,

    MixblendmodeHueComponent,

    ScrollEffectComponent,

    CarAnimationComponent,

    FullpageScrollComponent,

    PlayMusicComponent,

    TabMenuComponent,

    EcommerceComponent,

    NatourComponent,

    FileuploadComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypedJsModule

  ],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }