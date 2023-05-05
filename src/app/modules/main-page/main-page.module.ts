import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';

import { MainPageRoutingModule } from './main-page-routing.module';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { CardComponentModule } from 'src/app/shared/components/card/card.component';
import { AdViewComponent } from './pages/ad-view/ad-view.component';
import { NgIf, NgFor } from '@angular/common';
import { UserNumberModalComponentModule } from 'src/app/modals/user-number-modal/user-number-modal.component';
import { GalleriaComponentModule } from 'src/app/shared/components/galleria/galleria.component';
import { CurrencyPipe } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TreeModule } from 'primeng/tree';
import { FilterService } from 'primeng/api';


@NgModule({
  declarations: [
    RecommendationsComponent,
    AdViewComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ButtonModule,
    CardComponentModule,
    SkeletonModule,
    NgIf,
    UserNumberModalComponentModule,
    GalleriaComponentModule,
    DropdownModule,
    KeyFilterModule,
    InputTextModule,
    BreadcrumbModule,
    TreeModule,
    NgFor,
    
  ],
  providers: [ CurrencyPipe, FilterService ]
})
export class MainPageModule { }
