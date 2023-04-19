import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { UserNumberModalComponent } from 'src/app/modals/user-number-modal/user-number-modal.component';


@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss']
})
export class AdViewComponent implements OnInit{
public advert: any = false;

constructor(
  private _dialogService: DialogService
) {}

showUserNumber(){
  this._dialogService.open(UserNumberModalComponent,{
    header: 'Пользователь',
    style: {
      width: '516px',
    },
  });
}

public ngOnInit() {

  setTimeout(() => {
    this.advert = {
      images: [
        {
          src: 'https://i.pinimg.com/originals/42/67/3e/42673e608003f60330c9cb36c1f7ff90.jpg',
        },
        {
          src: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-7.jpg',
        },
        {
          src: 'https://www.ejin.ru/wp-content/uploads/2019/05/gora-17.jpg',
        },
        {
          src: 'https://sportishka.com/uploads/posts/2022-11/1667569238_8-sportishka-com-p-krasivie-vodopadi-mira-oboi-8.jpg',
        },
        {
          src: 'https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg',
        },
      ],
    };
  }, 1000);
}
}
