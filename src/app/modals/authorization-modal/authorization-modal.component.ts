import { Component, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { NgClass } from '@angular/common';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.scss']
})
export class AuthorizationModalComponent {

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
    this._dynamicDialogue.config.header = value ? 'Авторизация' : 'Регистрация';
  }

 private _isAuthenticated:boolean = true;

constructor(
  private _dynamicDialogue: DynamicDialogComponent,
  private _authService: AuthService
) {}

 loginForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
})

registrationForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  name: new FormControl<string>('',[Validators.required]),
  password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
})

logIn(){
  if(this.loginForm.invalid){
    return
  }
  const user = this.loginForm.value;
  this._authService.logIn(user);
  this._dynamicDialogue.close();
}


register(){
  if (this.registrationForm.invalid) {
    return;
  }
  const user = this.registrationForm.value;
  this._authService.register(user);
  this._dynamicDialogue.close();
}
}
@NgModule({
  declarations: [AuthorizationModalComponent],
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    InputMaskModule,
  ],
  exports: [AuthorizationModalComponent],
  providers: [],
})
export class AuthorizationModalComponentModule {

}
