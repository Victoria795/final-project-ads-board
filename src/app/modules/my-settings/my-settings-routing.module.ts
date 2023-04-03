import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySettingsComponent } from './my-settings/my-settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MySettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySettingsRoutingModule { }
