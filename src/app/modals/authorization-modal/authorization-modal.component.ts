import { Component, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.scss']
})
export class AuthorizationModalComponent {

 isAuthenticated:boolean = true;

 loginForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  password: new FormControl<string>('', [Validators.required]),
})

registrationForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  name: new FormControl<string>('',[Validators.required]),
  password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
})

register(){
  if (this.registrationForm.invalid) {
    return;
  }
  console.log('SUBMIT', this.registrationForm.value);
}
}
@NgModule({
  declarations: [AuthorizationModalComponent],
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    NgIf
  ],
  exports: [AuthorizationModalComponent],
  providers: [],
})
export class AuthorizationModalComponentModule {

}
