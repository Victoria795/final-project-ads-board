import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AdvertService } from 'src/app/core/services/advert.service';
import { YaApiLoaderService } from 'angular8-yandex-maps';
import { CategoryService } from 'src/app/core/services/category.service';
import { MessageService } from 'primeng/api';
import { ICategory } from 'src/app/shared/interfaces/i-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAdComponent implements OnInit{
  
  public categories:ICategory[] = [];

  constructor(private _advertService: AdvertService,
              private _yaApiLoaderService: YaApiLoaderService,
              private _categoryService: CategoryService,
              private _messageService: MessageService,
              private _router: Router) {}
  
  ngOnInit(): void {
    this._yaApiLoaderService.load().subscribe((ymaps) => {
    const suggest = new ymaps.SuggestView('address');
    suggest.events.add('select', e => {
      let addr = e.get('item').value;
      this.form.patchValue({
        address: addr
      })
    });
    });
    this._categoryService.getCategories()
    .subscribe((response) => {
    this.categories = response;
    })
  }
  
  form:FormGroup = new FormGroup({
    category: new FormControl<string | null>(null,[Validators.required]),
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
    description: new FormControl<string | null>(null, [Validators.minLength(10), Validators.maxLength(100)]),
    address: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
    images: new FormControl<string | null>(null),
    price: new FormControl<number | null>(null),
  })

 public createAd() {
  this.form.markAllAsTouched();
  if (this.form.invalid) {
      return;
  }
  const advert = this.form.value;
  this._advertService.createAdvert(advert).subscribe(
    (advert) => {
      this._router.navigateByUrl(`ad-view/${advert.id}`);
    },
  //   {
  //   next: () => {
  //     this._messageService.add({severity: 'success', summary: 'Объявление успешно создано'});
  //   }
  // }
  );
  console.log('SUBMIT', advert);
  this.form.reset();
  }

 public onUpload(guid: string) {
    this.form.get('images')?.setValue(guid);
  }
}
