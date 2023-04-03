import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySettingsRoutingModule } from './my-settings-routing.module';
import { MySettingsComponent } from './my-settings/my-settings.component';


@NgModule({
  declarations: [
    MySettingsComponent
  ],
  imports: [
    CommonModule,
    MySettingsRoutingModule
  ]
})
export class MySettingsModule { }
