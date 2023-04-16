import { Component } from '@angular/core';
import { IAd } from 'src/app/interfaces/i-ad';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {
  
  isLoading:boolean = false
  skeleton = new Array(20)
  ads:IAd[] = [] 
}
