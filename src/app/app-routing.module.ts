import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then(
        (m) => m.MainPageModule
      )
  },
  {
    path: 'create-ad',
    loadChildren: () =>
      import('./modules/create-ad/create-ad.module').then(
        (m) => m.CreateAdModule
      )
  },
  {
    path: 'my-ads',
    loadChildren: () =>
      import('./modules/my-ads/my-ads.module').then(
        (m) => m.MyAdsModule
      )
  },
  {
    path: 'my-settings',
    loadChildren: () =>
      import('./modules/my-settings/my-settings.module').then(
        (m) => m.MySettingsModule
      )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
