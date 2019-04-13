import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="navigateTo('pageOne')">Page One</button>
    <button (click)="navigateTo('lazy')">Lazy Module</button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(private router: Router) {

  }


  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
