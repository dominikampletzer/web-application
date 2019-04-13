import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DialogHelperService} from './dialog/dialog-helper.service';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>SQS SS-2019 Dummy-Applikation Ampletzer/Voit</h1>

    <button (click)="navigateTo('pageOne')">Page One</button>
    <button (click)="navigateTo('lazy')">Lazy Module</button>
    <button (click)="openDialog()">Dialog Öffnen</button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(private router: Router,
              private dialogHelper: DialogHelperService) {
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  public openDialog(): void {
    this.dialogHelper.openDialog(DialogComponent, 'BLUB');
  }
}
