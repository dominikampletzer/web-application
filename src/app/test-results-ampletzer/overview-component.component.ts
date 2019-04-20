import {Component} from '@angular/core';

@Component({
  selector: 'app-overview-component',
  template: `
    <div>
      <button (click)="navigateToTrend()">Trend Results</button>
    </div>
  `,
})
export class OverviewComponentComponent {


  navigateToTrend() {
    window.open('/testsAmpletzer/trend');
  }
}
