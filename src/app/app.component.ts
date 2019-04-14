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
    <button (click)="openPageInNewTab('pageOne')">Page One in neuem Tab</button>
    <button (click)="openPageInNewTab('lazy')">Lazy in neuem Tab</button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(private router: Router,
              private dialogHelper: DialogHelperService) {
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]).then();
  }

  public openPageInNewTab(path: string): void {
    window.open('/' + path);
  }

  public openDialog(): void {
    this.dialogHelper.openDialog(DialogComponent, {data: true});
  }
}
