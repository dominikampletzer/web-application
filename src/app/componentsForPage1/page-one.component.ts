import {Component} from '@angular/core';
import {v1 as uuid} from 'uuid';
import {AsyncApiService} from '../asyncApi/asyncApi.service';

@Component({
  selector: 'app-page-one',
  template: `
    <div [hidden]="submitted">
      <h1>Test Fall 1</h1>
      <form (ngSubmit)="onSubmit()" #testForm="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required [(ngModel)]="formModel.name" name="name" #name="ngModel">
          <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
            Name ist verpflichtend
          </div>
        </div>

        <div class="form-group">
          <label for="first-name">Vorname</label>
          <input type="text" class="form-control" id="first-name" [(ngModel)]="formModel.firstName" name="alterEgo">
        </div>

        <div class="form-group">
          <label for="sex">Geschlecht</label>
          <select class="form-control" id="sex" required [(ngModel)]="formModel.sex" name="sex" #sex="ngModel">
            <option id="{{ 'sexOption' + i }}" *ngFor="let s of sexArray; let i = index" [value]="s">{{ s }}</option>
          </select>
          <div [hidden]="sex.valid || sex.pristine" class="alert alert-danger">
            Geschlecht ist verpflichtend
          </div>
        </div>

        <button type="submit" class="btn btn-success" [disabled]="!testForm.form.valid">Senden</button>
        <button type="button" class="btn btn-default" (click)="newPerson(); testForm.reset()">Neue Person</button>
      </form>
    </div>

    <div [hidden]="!submitted">
      <h2>Folgendes wurde übermittelt:</h2>
      <div class="row">
        <div class="col-xs-3">Name</div>
        <div class="col-xs-9" id="sentName">{{ formModel.name }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Vorname</div>
        <div class="col-xs-9" id="sentFirstName">{{ formModel.firstName }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Geschlecht</div>
        <div class="col-xs-9" id="sentFirstSex">{{ formModel.sex }}</div>
      </div>
      <br>
      <button class="btn btn-primary" (click)="submitted=false">bearbeiten</button>
    </div>
  `
})

export class PageOneComponent {
  public sexArray = ['Weiblich', 'Männlich', 'Unbekannt', 'Nicht Angegeben', 'Neutral', 'Nicht Bekannt'];
  public formModel = new Person(uuid(), 'Musterman', this.sexArray[0], 'Dorotea');
  public submitted = false;

  public constructor(private asyncApi: AsyncApiService) {
  }

  public onSubmit(): void {
    this.asyncApi.getSomeReturnBool().then((result: boolean) => {
      this.submitted = result;
    });
  }

  public newPerson(): void {
    this.formModel = new Person(uuid(), '', this.sexArray[0]);
  }
}

export class Person {

  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public firstName?: string
  ) {
  }

}
