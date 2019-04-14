import {Component, Inject, Input, OnInit} from '@angular/core';
import {AsyncApiService, CustomItem} from '../asyncApi/asyncApi.service';
import {SnackBarHelperService} from '../uiFrameworks/snack-bar-helper.service';
import {DialogHelperService} from './dialog-helper.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `
    <div>
      <h1>Test Fall 3</h1>

      <div *ngIf="!customItems">
        <mat-progress-spinner [color]="'accent'" [mode]="'indeterminate'" [value]="50">
        </mat-progress-spinner>
      </div>
      <div *ngIf="customItems">

        <ol>
          <li *ngFor="let element of customItems, let idx = index" id="{{ 'customItem' + idx }}" (click)="itemClicked( element)">
            <span>{{ element.title }}</span>
            <span>{{ element.description }}</span>
            <span>{{ element.someNumber}}</span>
          </li>
        </ol>
      </div>

    </div>
  `
})
export class DialogComponent implements OnInit {
  public customItems: CustomItem[];
  @Input() public shouldOpenDialog: boolean;
  readonly dialogData: any;

  constructor(private asyncApi: AsyncApiService,
              public dialogRef: MatDialogRef<DialogComponent>,
              private dialogHelper: DialogHelperService,
              private snackBarHelper: SnackBarHelperService,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.dialogData = data;
  }

  public ngOnInit(): void {
    if (this.dialogData) {
      this.shouldOpenDialog = this.dialogData.data;
    }
    this.asyncApi.getSomeCustomItems().then((result: CustomItem[]) => this.customItems = result);
  }

  public itemClicked(element: CustomItem): void {
    if (this.shouldOpenDialog) {
      this.dialogHelper.openDialog(DialogComponent, {data: false});
    } else {
      this.snackBarHelper.openSnackbar(element.title + ' wurde geklickt');
    }
  }
}

