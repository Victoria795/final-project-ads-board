import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvertService } from 'src/app/core/services/advert.service';
import { ILoading } from 'src/app/interfaces/i-loading';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  sortOptions:any = [];

  public loading$ = new BehaviorSubject<ILoading>({
    isLoading: true,
    ads: []
  })

  public skeleton = new Array(20)

  constructor(private _AdvertService: AdvertService) {}

  public ngOnInit(): void {
    this._AdvertService.getAdverts()
    .subscribe((response) => {
        this.loading$.next({
          isLoading: false,
          ads: response
        }) 
    })
    this.sortOptions = [
      { name: 'Новизне' },
      { name: 'Категории' },
      { name: 'Стоимости' },
  ];
  }
}
