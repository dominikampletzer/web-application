import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './componentsForPage1/page-one.component';

const routes: Routes = [
    {
      path: 'pageOne',
      component: PageOneComponent
    },
    {
      path: 'lazy',
      loadChildren: './lazyModule/lazy.module#LazyModule'
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
