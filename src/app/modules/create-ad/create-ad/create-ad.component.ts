import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertService } from 'src/app/core/services/advert.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent {

  constructor(private _advertService: AdvertService) {}

  form:FormGroup = new FormGroup({
    category: new FormControl<string>('',[Validators.required]),
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
    description: new FormControl<string | null>(null, [Validators.minLength(10), Validators.maxLength(100)]),
    address: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
    images: new FormControl<[[]] | null>(null),
    price: new FormControl<number | null>(null),
  })
  categories = [
    {
      id:'auto',
      name:'Автомобили',
      parentId:'none',
      subCategories:[
        {
          id:'fvdrkvg',
          name:'Легковые',
          parentId:'aba'
        },
        {
          id:'dffdvkgfk',
          name:'Грузовые',
          parentId:'auto'
        },
      ]
    },
    {
      id:'ele',
      name:'Электроника',
      parentId:'none',
      subCategories:[
        {
          id:'fvjjjfm',
          name:'Процессор',
          parentId:'ele'
        },
        {
          id:'sfvksf',
          name:'Телефон',
          parentId:'ele'
        },
      ]
    } 
    ]

  createAd() {
  this.form.markAllAsTouched();
  if (this.form.invalid) {
      return;
  }
  const advert = this.form.value;
  this._advertService.createAdvert(advert);
  console.log('SUBMIT', advert);
  this.form.reset();
  }
}
