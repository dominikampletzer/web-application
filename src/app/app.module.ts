import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AsyncApiModule} from './asyncApi/asyncApi.module';
import {CustomMaterialModule} from './uiFrameworks/custom-material.module';
import {PageOneComponent} from './componentsForPage1/page-one.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AsyncApiModule,
    CustomMaterialModule,
  ],
  declarations: [
    AppComponent,
    PageOneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
