import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material';
import {SnackBarComponent} from './snack-bar.component';

@Injectable()
export class SnackBarHelperService {
  constructor(private snackBar: MatSnackBar) {
  }


  public openSnackbar(message: string): void {
    const snackRef: MatSnackBarRef<SnackBarComponent> = this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: {data: message},
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
