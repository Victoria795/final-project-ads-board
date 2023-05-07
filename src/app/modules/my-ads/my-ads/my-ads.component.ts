import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAdsComponent {
  
  isLoading:boolean = true;
  skeleton = new Array(20)
  ads:IAd[] | undefined;

  constructor(private _AdvertService: AdvertService,
              private _cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
  this._AdvertService.getAdverts()
  .subscribe((response) => {
  this.ads = response.reverse();
  this.isLoading = false;
  this._cdr.markForCheck();
  })
  }
}
