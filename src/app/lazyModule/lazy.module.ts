import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyRoutingModule} from './lazy-routing.module';
import {LazyComponent} from './lazy.component';
import {AsyncApiModule} from '../asyncApi/asyncApi.module';
import {CustomMaterialModule} from '../uiFrameworks/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    AsyncApiModule,
    CustomMaterialModule,
  ],
  declarations: [
    LazyComponent,
  ],
})
export class LazyModule {
}
