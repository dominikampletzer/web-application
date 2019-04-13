import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsyncApiService} from './asyncApi.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AsyncApiService
  ],

})
export class AsyncApiModule {
}
