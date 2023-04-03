import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdRoutingModule } from './create-ad-routing.module';
import { CreateAdComponent } from './create-ad/create-ad.component';


@NgModule({
  declarations: [
    CreateAdComponent
  ],
  imports: [
    CommonModule,
    CreateAdRoutingModule
  ]
})
export class CreateAdModule { }
