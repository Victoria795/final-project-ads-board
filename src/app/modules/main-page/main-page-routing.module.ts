import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { AdViewComponent } from './pages/ad-view/ad-view.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsComponent,
  },
  {
    path: 'ad-view/:id',
    component: AdViewComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'search/ad-view/:id',
    component: AdViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
