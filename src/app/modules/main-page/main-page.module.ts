import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { AdViewComponent } from './pages/ad-view/ad-view.component';


@NgModule({
  declarations: [
    RecommendationsComponent,
    AdViewComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
