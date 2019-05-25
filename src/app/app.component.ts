import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DialogHelperService} from './dialog/dialog-helper.service';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <!--    todo FH-Rosenheim Logo und aufhübschen-->
    <h1>SQS SS-2019 Dummy-Applikation Ampletzer/Voit</h1>

    <button (click)="navigateTo('form')" id="formButton">Form</button>
    <button class="lazy" (click)="navigateTo('lazy')">Lazy Module</button>
    <button id="upload" (click)="navigateTo('upload')">Upload</button>
    <button id='iFrame'(click)="navigateTo('iFrame')">iFrame</button>
    <button id="openDialogButton" (click)="openDialog()">Dialog Öffnen</button>
    <button id="formInNewTabButton" (click)="openPageInNewTab('form')">Form in neuem Tab</button>
    <button id="lazyInNewTabButton" (click)="openPageInNewTab('lazy')">Lazy in neuem Tab</button>

    <router-outlet></router-outlet>
    <div style="bottom: 30px; position: absolute">
      <button (click)="navigateTo('testsAmpletzer')">Test Ergebnisse Ampletzer</button>
    </div>


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
