import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateAdComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAdRoutingModule { }
