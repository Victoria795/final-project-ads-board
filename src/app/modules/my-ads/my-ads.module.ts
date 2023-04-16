import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdsRoutingModule } from './my-ads-routing.module';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { CardComponentModule } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    MyAdsComponent,
    NewAdComponent
  ],
  imports: [
    CommonModule,
    MyAdsRoutingModule,
    CardComponentModule
  ]
})
export class MyAdsModule { }
