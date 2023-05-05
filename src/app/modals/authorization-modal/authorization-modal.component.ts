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
import { MessageService } from 'primeng/api';

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
  private _authService: AuthService,
  private _messageService: MessageService
) {}

 loginForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
})

registrationForm: FormGroup = new FormGroup({
  login: new FormControl<string>('',[Validators.required]),
  name: new FormControl<string>('',[Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
  password: new FormControl<string>('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
})

logIn(){
  this.loginForm.markAllAsTouched();
  if(this.loginForm.invalid){
    return
  }
  const user = this.loginForm.value;
  this._authService.logIn(user);
  this._dynamicDialogue.close();
}


register(){
  this.registrationForm.markAllAsTouched();
  if (this.registrationForm.invalid) {
    return;
  }
  const user = this.registrationForm.value;
  this._authService.register(user).subscribe({
    next: () => {
      this._messageService.add({severity: 'success', summary: 'Вы успешно зарегистрировались!'});
    }
  }
  );
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


