import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';
import {SnackBarComponent} from './snack-bar.component';
import {SnackBarHelperService} from './snack-bar-helper.service';
import {CommonModule} from '@angular/common';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES],
  declarations: [
    SnackBarComponent
  ],
  entryComponents: [
    SnackBarComponent,
  ],
  providers: [
    SnackBarHelperService,
  ],
  exports: [MATERIAL_MODULES],
})
export class CustomMaterialModule {
}
