import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { ClarityModule } from "@clr/angular";
import { CssRouting } from './css.routing';

import { AngularDraggableModule } from 'angular2-draggable';

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

import { LayoutModule } from '../layouts/layout.module';
import { WoodComponent } from './components/wood/wood.component';
import { TweenmaxComponent } from './components/tweenmax/tweenmax.component';
import { SlidingMenuComponent } from './components/sliding-menu/sliding-menu.component';
import { SplitImageComponent } from './components/split-image/split-image.component';
import { MultiStepComponent } from './components/multi-step/multi-step.component';
import { FlightLoaderComponent } from './components/flight-loader/flight-loader.component';
import { EyeFollowComponent } from './components/eye-follow/eye-follow.component';
import { TurbulenceComponent } from './components/turbulence/turbulence.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { PanzoomComponent } from './components/panzoom/panzoom.component';
import { SnapEffectComponent } from './components/snap-effect/snap-effect.component';
import { SetterGetterComponent } from '../ngschool/ES6/setter-getter/setter-getter.component';
import { InjectionTokenComponent } from '../ngschool/core/injection-token/injection-token.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
    declarations: [
        CssComponent,
        ShadowComponent,
        JoinatomComponent,
        Joinatom2Component,
        DiamondGridComponent,
        UrbanFactionComponent,
        FlipHover3dComponent,
        FolderComponent,
        FlipBookComponent,
        ClipPathComponent,
        ClipPathCircleComponent,
        ClipPathImageComponent,
        ScratchEffectComponent,
        FocusComponent,
        WoodComponent,
        TweenmaxComponent,
        SlidingMenuComponent,
        SplitImageComponent,
        MultiStepComponent,
        FlightLoaderComponent,
        EyeFollowComponent,
        TurbulenceComponent,
        PanzoomComponent,
        SnapEffectComponent,
        SetterGetterComponent,
        InjectionTokenComponent,
        RegisterFormComponent,


    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CssRouting,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        AngularDraggableModule, // https://xieziyu.github.io/angular2-draggable/#/home
        LayoutModule,
        NgxTypedJsModule,
        NgxPanZoomModule,

    ],
    providers: [

    ],
})
export class CssModule { }
