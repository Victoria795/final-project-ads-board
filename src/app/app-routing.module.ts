import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'Рекомендации',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then(
        (m) => m.MainPageModule
      )
  },
  {
    path: 'create-ad',
    title: 'Новое объявление',
    canMatch: [() => inject(AuthService).isLoggined()],
    loadChildren: () =>
      import('./modules/create-ad/create-ad.module').then(
        (m) => m.CreateAdModule
      )
  },
  {
    path: 'my-ads',
    title: 'Мои объявления',
    canMatch: [() => inject(AuthService).isLoggined()],
    loadChildren: () =>
      import('./modules/my-ads/my-ads.module').then(
        (m) => m.MyAdsModule
      )
  },
  {
    path: 'my-settings',
    title: 'Настройки',
    canMatch: [() => inject(AuthService).isLoggined()],
    loadChildren: () =>
      import('./modules/my-settings/my-settings.module').then(
        (m) => m.MySettingsModule
      )
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
