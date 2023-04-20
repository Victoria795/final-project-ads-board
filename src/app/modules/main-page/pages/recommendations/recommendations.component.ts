import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { BehaviorSubject } from 'rxjs';
import { ILoading } from 'src/app/interfaces/i-loading';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsComponent implements OnInit {

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
  }
}



   





