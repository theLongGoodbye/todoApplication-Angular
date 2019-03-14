import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { RightControlComponent } from './right-control/right-control.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [MainComponent, LeftControlComponent, RightControlComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule
  ]
})
export class MainModule { }
