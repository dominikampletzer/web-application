import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponentComponent} from './overview-component.component';
import {TrendResultComponent} from './trend-result.component';

const routes: Routes = [
    {
      path: '',
      component: OverviewComponentComponent
    },
  {
    path: 'trend',
    component: TrendResultComponent
  },
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TestResultsAmpletzerRoutingModule {
}
