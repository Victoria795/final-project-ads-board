import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { IAd } from 'src/app/interfaces/i-ad';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {

  isLoading:boolean = true
  ads:IAd[] = [] 
  skeleton = new Array(20)

  constructor(private _AdvertService: AdvertService) {}

  public ngOnInit(): void {
    this._AdvertService.getAdverts()
    .subscribe((response) => {
      setTimeout(() => {
        this.ads = response
        this.isLoading = false
      }, 1500)
      
    })
  }
}



   





