import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { IUserInfo } from 'src/app/shared/interfaces/i-user-info';

@Component({
  selector: 'app-my-settings',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.scss']
})

export class MySettingsComponent implements OnInit{

public user!: IUserInfo;
public settingsForm!: FormGroup;
public changePasswordForm!: FormGroup;
public changesSaved:boolean = false;
public passwordSaved:boolean = false;

constructor(private _userService:UserService){ }

public ngOnInit(): void {
  this._userService.getUserInfo().subscribe(
    (res) => {this.user = res})

    this.settingsForm = new FormGroup({
      name: new FormControl<string>(this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
      phone: new FormControl<string>(this.user.phone,[Validators.required]),
      address: new FormControl<string>(this.user.address, [Validators.minLength(3), Validators.maxLength(250)]),
    })
  
    this.changePasswordForm = new FormGroup({
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)], ),
      newPassword: new FormControl<string>('',[Validators.required, Validators.minLength(8), Validators.maxLength(250)]),
    }, { validators: MySettingsComponent.passwordsEqual})  
    
}
 
static passwordsEqual: ValidatorFn = (changePasswordForm: AbstractControl): ValidationErrors | null => {
    const password = changePasswordForm.get('password')?.value;
    const newPassword = changePasswordForm.get('newPassword')?.value;
    return password !== newPassword ? null : { equalPasswords: true };
};

public changeInfo() {
    this.settingsForm.markAllAsTouched();
    if (this.settingsForm.valid) {
      this.changesSaved = true;
      console.log('SUBMIT', this.settingsForm.value);
    }
    else return
  }

public changePassword() {
    this.changePasswordForm.markAllAsTouched();
    if (this.changePasswordForm.valid) {
      this.passwordSaved = true;
      console.log('SUBMIT', this.changePasswordForm.value);
    }
    else return
  }
}
