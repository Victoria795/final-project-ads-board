import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoading } from 'src/app/shared/interfaces/i-loading';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  sortOptions:any = [];
  value:any = this.searchService.value
  
  public loading$ = new BehaviorSubject<ILoading>({
    isLoading: true,
    ads: []
  })

  public skeleton = new Array(20)

  constructor(public searchService: SearchService) {}

  public ngOnInit(): void {
  
    this.loading$.next({
         isLoading: false,
         ads: this.searchService.transformedArray
     })
    this.sortOptions = [
      { name: 'умолчанию' },
      { name: 'новизне' },
      { name: 'возрастанию' },
  ];
  }
}
