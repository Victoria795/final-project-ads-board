import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdsRoutingModule } from './my-ads-routing.module';
import { MyAdsComponent } from './my-ads/my-ads.component';


@NgModule({
  declarations: [
    MyAdsComponent
  ],
  imports: [
    CommonModule,
    MyAdsRoutingModule
  ]
})
export class MyAdsModule { }
