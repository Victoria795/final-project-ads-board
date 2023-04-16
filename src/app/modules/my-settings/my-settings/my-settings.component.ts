import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-settings',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.scss']
})
export class MySettingsComponent {
  settingsForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl<string>('',[Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
  })

  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl<string>('', [Validators.required]),
    newPassword: new FormControl<string>('',[Validators.required, Validators.minLength(8)]),
  })
  changesSaved:boolean = false;
  passwordSaved:boolean = false;

  submit() {
    if (this.settingsForm.invalid) {
      return;
    }
    this.changesSaved = true;
    console.log('SUBMIT', this.settingsForm.value);
  }

  submitPass() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.passwordSaved = true;
    console.log('SUBMIT', this.changePasswordForm.value);
  }
}
