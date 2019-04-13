import {Component} from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <div>
      <div>
        <input id="'userName'" placeholder="'Benutzername'" value="{{ loginData.userName }}"
               (onChangeEvent)="loginData.userName = $event">
      </div>
      <div>
        <input id="'userPassword'" placeholder="'Passwort'" value="{{ loginData.password }}"
               (onChangeEvent)="loginData.userName = $event">
      </div>
      <div>
        <button id="'signIn'" (onClick)="login()"
        >Anmelden
        </button>
      </div>
    </div>
  `
})

export class LazyComponent {
  public loginData = {
    userName: '',
    password: '',
  };


  public login() {
  }
}
