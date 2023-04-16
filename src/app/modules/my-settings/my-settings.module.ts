import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

import { MySettingsRoutingModule } from './my-settings-routing.module';
import { MySettingsComponent } from './my-settings/my-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    MySettingsComponent
  ],
  imports: [
    CommonModule,
    MySettingsRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    NgIf
  ]
})
export class MySettingsModule { }
