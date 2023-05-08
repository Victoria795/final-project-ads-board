import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdRoutingModule } from './create-ad-routing.module';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from './components/add-image/add-image.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    CreateAdComponent,
    AddImageComponent
  ],
  imports: [
    CommonModule,
    CreateAdRoutingModule,
    CascadeSelectModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule, 
    FileUploadModule
  ]
})
export class CreateAdModule { }
