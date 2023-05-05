import { Component, NgModule, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FilterComponent } from './filter/filter.component';
import { NgIf, NgFor } from '@angular/common';
import { CategoryService } from 'src/app/core/services/category.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { SearchService } from 'src/app/core/services/search.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

public isFilterOpened:boolean = false;
public searchTerm: string = '';

constructor(private _searchService: SearchService,){
}
search(){
  this._searchService.transformedArray = [];
  this._searchService.value = this.searchTerm;
  this._searchService.searchAdverts();
}
getTerm(term:string){
  this.searchTerm = term;
}

public toggleFilter():void {
   this.isFilterOpened = !this.isFilterOpened
}
}
@NgModule({
  declarations: [SearchPanelComponent, FilterComponent],
  imports: [
    ButtonModule,
    InputTextModule,
    NgIf, 
    NgFor,
    AsyncPipe,
    RouterLink,
    NgClass,
    FormsModule
  ],
  exports: [SearchPanelComponent, FilterComponent],
  providers: [CategoryService, NgModel],
})

export class SearchPanelComponentModule {}
