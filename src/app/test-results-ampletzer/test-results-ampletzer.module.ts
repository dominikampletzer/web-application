import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponentComponent} from './overview-component.component';
import {TestResultsAmpletzerRoutingModule} from './test-results-ampletzer-routing.module';
import {TrendResultComponent} from './trend-result.component';

@NgModule({
  declarations: [
    OverviewComponentComponent,
    TrendResultComponent,
  ],
  imports: [
    CommonModule,
    TestResultsAmpletzerRoutingModule
  ]
})
export class TestResultsAmpletzerModule {
}
