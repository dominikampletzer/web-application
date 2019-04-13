import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {
      path: '',
      redirectTo: 'pageOne',
      pathMatch: 'full',
    },
    {
      path: 'pageOne',
      loadChildren: './componentsForPage1/page-one.module#PageOneModule',
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
