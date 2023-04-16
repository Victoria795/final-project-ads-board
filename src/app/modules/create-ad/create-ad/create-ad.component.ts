import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent {
  form: FormGroup = new FormGroup({
    category: new FormControl<string>('',[Validators.required]),
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl<string>(''),
    address: new FormControl<string>('', [Validators.required]),
    images: new FormControl<Array<[]>>([]),
    price: new FormControl<number>(0),
  })

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log('SUBMIT', this.form.value);
  }
}
