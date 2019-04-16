import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AsyncApiModule} from './asyncApi/asyncApi.module';
import {CustomMaterialModule} from './uiFrameworks/custom-material.module';
import {PageOneComponent} from './componentsForPage/page-one.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogComponent} from './dialog/dialog.component';
import {DialogHelperService} from './dialog/dialog-helper.service';
import {UploadComponent} from './componentsForPage/upload.component';
import {IFrameComponent} from './componentsForPage/i-frame.component';

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
    PageOneComponent,
    DialogComponent,
    UploadComponent,
    IFrameComponent,
  ],
  providers: [DialogHelperService],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
