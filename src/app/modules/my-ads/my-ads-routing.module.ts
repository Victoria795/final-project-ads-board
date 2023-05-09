import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdsComponent } from './my-ads/my-ads.component';

const routes: Routes = [
  {
    path: '',
    component: MyAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdsRoutingModule { }
