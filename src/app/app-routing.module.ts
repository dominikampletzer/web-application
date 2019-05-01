import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './componentsForPage/form.component';
import {IFrameComponent} from './componentsForPage/i-frame.component';
import {UploadComponent} from './componentsForPage/upload.component';

const routes: Routes = [
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'iFrame',
      component: IFrameComponent
    },
    {
      path: 'upload',
      component: UploadComponent
    },
    {
      path: 'lazy',
      loadChildren: './lazyModule/lazy.module#LazyModule'
    },
    {
      path: 'testsAmpletzer',
      loadChildren: './test-results-ampletzer/test-results-ampletzer.module#TestResultsAmpletzerModule'
    },
  ]
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
