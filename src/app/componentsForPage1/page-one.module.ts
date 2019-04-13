import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageOneRoutingModule} from './page-one-routing.module';
import {PageOneComponent} from './page-one.component';
import {FormsModule} from '@angular/forms';
import {AsyncApiModule} from '../asyncApi/asyncApi.module';

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule,
    FormsModule,
    AsyncApiModule,
  ],
  declarations: [
    PageOneComponent,
  ],
})
export class PageOneModule {
}
