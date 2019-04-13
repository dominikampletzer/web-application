import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `
    <div *ngIf="message">
      <div id="snackBarMessage">{{ message }}</div>
    </div>
  `
})
export class SnackBarComponent implements OnInit {
  public dialogData: any;
  public message: string;

  constructor(public dialogRef: MatSnackBarRef<SnackBarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) private data: any) {
    this.dialogData = data;
  }

  public ngOnInit(): void {
    if (this.dialogData) {
      this.message = this.dialogData.data;
    }
  }
}

