import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';



@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
 })
export class RecommendationsComponent implements OnInit {

  public isLoading:boolean = true;
  public ads:IAd[] | undefined;
  public skeleton = new Array(20)

  constructor(private _AdvertService: AdvertService,
              private _cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this._AdvertService.getAdverts()
    .subscribe((response) => {
          this.ads = response.reverse();
          this.isLoading = false;
          this._cdr.detectChanges();
    })
  }
}



   





