import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { ShadowComponent } from './components/shadow/shadow.component';
import { JoinatomComponent } from './components/joinatom/joinatom.component';
import { Joinatom2Component } from './components/joinatom2/joinatom2.component';
import { DiamondGridComponent } from './components/diamond-grid/diamond-grid.component';
import { UrbanFactionComponent } from './components/urban-faction/urban-faction.component';
import { FlipHover3dComponent } from './components/flip-hover3d/flip-hover3d.component';
import { FolderComponent } from './components/folder/folder.component';
import { FlipBookComponent } from './components/flip-book/flip-book.component';
import { ClipPathComponent } from './components/clip-path/clip-path.component';
import { ClipPathCircleComponent } from './components/clip-path-circle/clip-path-circle.component';
import { ClipPathImageComponent } from './components/clip-path-image/clip-path-image.component';
import { ScratchEffectComponent } from './components/scratch-effect/scratch-effect.component';
import { FocusComponent } from './components/focus/focus.component';


import { SlidingTextComponent } from '../layouts/sliding-text/sliding-text.component';
import { ArEffectComponent } from '../layouts/ar-effect/ar-effect.component';
import { ImageSliderComponent } from '../layouts/image-slider/image-slider.component';
import { LoginFormComponent } from '../layouts/login-form/login-form.component';
import { ImageHoverComponent } from '../layouts/image-hover/image-hover.component';
import { MixblendmodeHueComponent } from '../layouts/mixblendmode-hue/mixblendmode-hue.component';
import { ScrollEffectComponent } from '../layouts/scroll-effect/scroll-effect.component';
import { WoodComponent } from './components/wood/wood.component';
import { TweenmaxComponent } from './components/tweenmax/tweenmax.component';
import { SlidingMenuComponent } from './components/sliding-menu/sliding-menu.component';
import { SplitImageComponent } from './components/split-image/split-image.component';
import { MultiStepComponent } from './components/multi-step/multi-step.component';
import { CarAnimationComponent } from '../layouts/car-animation/car-animation.component';
import { FlightLoaderComponent } from './components/flight-loader/flight-loader.component';
import { FullpageScrollComponent } from '../layouts/fullpage-scroll/fullpage-scroll.component';
import { EyeFollowComponent } from './components/eye-follow/eye-follow.component';
import { TurbulenceComponent } from './components/turbulence/turbulence.component';
import { TabMenuComponent } from '../layouts/tab-menu/tab-menu.component';
import { EcommerceComponent } from '../layouts/ecommerce/ecommerce.component';
import { PanzoomComponent } from './components/panzoom/panzoom.component';


const routes: Routes = [
  {
    path: '', component: CssComponent, children: [
      { path: 'shadow', component: ShadowComponent },
      { path: 'joinatom', component: JoinatomComponent },
      { path: 'joinatomII', component: Joinatom2Component },
      { path: 'diamond-grid', component: DiamondGridComponent },
      { path: 'urban-faction', component: UrbanFactionComponent },
      { path: 'flip-hover-3d', component: FlipHover3dComponent },
      { path: 'flip-book', component: FlipBookComponent },
      { path: 'folder', component: FolderComponent },
      { path: 'clip-path', component: ClipPathComponent },
      { path: 'clip-path-circle', component: ClipPathCircleComponent },
      { path: 'clip-path-image', component: ClipPathImageComponent },
      { path: 'scratch-effect', component: ScratchEffectComponent },
      { path: 'focus', component: FocusComponent },
      { path: 'wood_texture', component: WoodComponent },
      { path: 'sliding-menu', component: SlidingMenuComponent },

      { path: 'split-image', component: SplitImageComponent },
      {
        path: 'css2', children: [
          { path: 'multi-step', component: MultiStepComponent },
          { path: 'flight-loader', component: FlightLoaderComponent },
          { path: 'eye-follow', component: EyeFollowComponent },
          { path: 'turblence', component: TurbulenceComponent },
          { path: 'panzoom', component: PanzoomComponent },

        ]
      },
      {
        path: 'landing_page', children: [
          { path: 'tweenmax', component: TweenmaxComponent },
          { path: 'sliding-text', component: SlidingTextComponent },
          { path: 'ar-3d-effect', component: ArEffectComponent },
          { path: 'image-slider', component: ImageSliderComponent },
          { path: 'login-form', component: LoginFormComponent },
          { path: 'image-hover', component: ImageHoverComponent },
          { path: 'mix-blend-mode-hue', component: MixblendmodeHueComponent },
          { path: 'scroll-effect', component: ScrollEffectComponent },
          { path: 'car-animation', component: CarAnimationComponent },
          { path: 'fullpage-scroll', component: FullpageScrollComponent },
          { path: 'tab-menu', component: TabMenuComponent },
          { path: 'ecommerce', component: EcommerceComponent },
        ]
      }


    ],
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
export class CssRouting { }
