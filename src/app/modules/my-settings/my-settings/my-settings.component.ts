import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-my-settings',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.scss']
})
export class MySettingsComponent {

  settingsForm: FormGroup = new FormGroup({
    name: new FormControl<string>('Алексей', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
    phone: new FormControl<string>('',[Validators.required]),
    address: new FormControl<string>('', [Validators.minLength(3), Validators.maxLength(250)]),
  })

  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    newPassword: new FormControl<string>('',[Validators.required, Validators.minLength(8), Validators.maxLength(250)]),
  }, { validators: MySettingsComponent.passwordsNotEqual })

  static passwordsNotEqual: ValidatorFn = (changePasswordForm: AbstractControl): ValidationErrors | null => {
    const password = changePasswordForm.get('password')?.value;
    const newPassword = changePasswordForm.get('newPassword')?.value;
    return password !== newPassword ? null : { equalPasswords: true };
  };

  changesSaved:boolean = false;
  passwordSaved:boolean = false;

  changeInfo() {
    this.settingsForm.markAllAsTouched();
    if (this.settingsForm.invalid) {
      return;
    }
    this.changesSaved = true;
    console.log('SUBMIT', this.settingsForm.value);
  }

  changePassword() {
    this.changePasswordForm.markAllAsTouched();
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.passwordSaved = true;
    console.log('SUBMIT', this.changePasswordForm.value);
  }
}
