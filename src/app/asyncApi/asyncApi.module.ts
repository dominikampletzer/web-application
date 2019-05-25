import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsyncApiService} from './asyncApi.service';
import {CustomMaterialModule} from '../uiFrameworks/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  providers: [
    AsyncApiService
  ],

})
export class AsyncApiModule {
}
