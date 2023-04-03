import { Component, OnInit } from '@angular/core';
import { IAd } from 'src/app/interfaces/i-ad';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  isLoading:boolean = true
  ads:IAd[] = [] 
  skeleton = new Array(20)

  public ngOnInit(): void {
    setTimeout(() => {
        this.isLoading = false;
        this.ads = new Array(20).fill({
          id: 0,
          title: 'Гитара Fender',
          price: 20000,
          imgSrc: 'https://placehold.co/600x400',
          createdAt: 'Сегодня 14:12',
          address: 'Москва',
        });
    }, 1500);
  }
}

   





