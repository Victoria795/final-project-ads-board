import { Component, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.scss']
})
export class AuthorizationModalComponent {

}
@NgModule({
  declarations: [AuthorizationModalComponent],
  imports: [
    InputTextModule,
    ButtonModule
  ],
  exports: [AuthorizationModalComponent],
  providers: [],
})
export class AuthorizationModalComponentModule {

}
