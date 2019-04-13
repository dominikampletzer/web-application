import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Injectable()
export class DialogHelperService {
  constructor(private dialog: MatDialog,
  ) {
  }

  public openDialog<DialogComponent>(T: any, dialogData: any): void {
    let dialogRef: MatDialogRef<DialogComponent>;
    const config = {
      disableClose: false,
      maxWidth: '80%',
      data: dialogData,
      autoFocus: true,
      width: ''
    };
    dialogRef = this.dialog.open(T, config);
  }

}
