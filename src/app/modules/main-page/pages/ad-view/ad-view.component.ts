import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UserNumberModalComponent } from 'src/app/modals/user-number-modal/user-number-modal.component';
import { AdvertService } from 'src/app/core/services/advert.service';
import { ActivatedRoute } from '@angular/router';
import { IFullAd } from 'src/app/shared/interfaces/i-full-ad';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
})
export class AdViewComponent implements OnInit {

public advert$: Observable<IFullAd> | undefined;
public id: string = '';
public images:any;
public items!: MenuItem[];

constructor(
  private _dialogService: DialogService,
  private _advertService: AdvertService,
  private _activatedRoute: ActivatedRoute,
  private _categoryService: CategoryService,
  private _cdr: ChangeDetectorRef
) { }

public showUserNumber(){
  this._dialogService.open(UserNumberModalComponent,{
    header: 'Пользователь',
    style: {
      width: '516px',
    },
  });
}

public openMap(address:string){
  const mapUrl = `https://yandex.com/maps/?text=${encodeURIComponent(address)}`;
  window.open(mapUrl, '_blank');
}

public ngOnInit() {

  this.id = this._activatedRoute.snapshot.params['id'];
  this.advert$ = this._advertService.getAdvertById(this.id);
  this._advertService.getAdvertById(this.id).subscribe((advert) => {
    let id = advert.categoryId
    if(id !== undefined){
      this.items = this._categoryService.makeBreadcrumbs(id);
    } 
    this._cdr.detectChanges();
  }
  );
 
  this.images = [
        {
          src: 'https://i.pinimg.com/originals/42/67/3e/42673e608003f60330c9cb36c1f7ff90.jpg',
        },
        {
          src: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-7.jpg',
        },
        {
          src: 'https://i.pinimg.com/originals/42/67/3e/42673e608003f60330c9cb36c1f7ff90.jpg',
        },
        {
          src: 'https://sportishka.com/uploads/posts/2022-11/1667569238_8-sportishka-com-p-krasivie-vodopadi-mira-oboi-8.jpg',
        },
        {
          src: 'https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg',
        },
      ]
    }
 }

  
