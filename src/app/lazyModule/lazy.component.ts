import {Component, OnInit} from '@angular/core';
import {AsyncApiService, CustomItem} from '../asyncApi/asyncApi.service';
import {SnackBarHelperService} from '../uiFrameworks/snack-bar-helper.service';

@Component({
  selector: 'app-lazy',
  template: `
    <div>
      <h1>Test Fall 2</h1>

      <div *ngIf="!data">
        <mat-progress-spinner [color]="'accent'" [mode]="'indeterminate'" [value]="50">
        </mat-progress-spinner>
      </div>
      <div *ngIf="data">

        <ol>
          <li *ngFor="let element of data, let idx = index" id="{{ 'customItem' + idx }}" (click)="triggerSnackbar(element)">
            <span>{{ element.title }}</span>
            <span>{{ element.description }}</span>
            <span>{{ element.someNumber}}</span>
          </li>
        </ol>
      </div>

    </div>
    <div>
    </div>
  `
})

export class LazyComponent implements OnInit {
  public data: CustomItem[];

  constructor(private asyncApi: AsyncApiService,
              private snackBarHelper: SnackBarHelperService) {
  }

  public ngOnInit(): void {
    this.asyncApi.getSomeCustomItems().then((result: CustomItem[]) => this.data = result);
  }

  public triggerSnackbar(element: CustomItem): void {
    this.snackBarHelper.openSnackbar(element.title + ' wurde geklickt');

  }
}
