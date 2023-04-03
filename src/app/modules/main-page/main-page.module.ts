import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

import { MainPageRoutingModule } from './main-page-routing.module';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { AdViewComponent } from './pages/ad-view/ad-view.component';
import { CardComponentModule } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    RecommendationsComponent,
    AdViewComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ButtonModule,
    CardComponentModule,
    SkeletonModule
  ]
})
export class MainPageModule { }
