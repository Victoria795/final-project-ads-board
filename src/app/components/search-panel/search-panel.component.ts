import { Component, NgModule, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FilterComponent } from './filter/filter.component';
import { NgIf } from '@angular/common';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit{
public isFilterOpened:boolean = false
public toggleFilter():void {
   this.isFilterOpened = !this.isFilterOpened
}
categories: any[] = []
  constructor(private _CategoryService: CategoryService) {}

  public ngOnInit(): void {
    this._CategoryService.getCategories()
    .subscribe((response) => {
        this.categories = response
    })
  }
}
@NgModule({
  declarations: [SearchPanelComponent, FilterComponent],
  imports: [
    ButtonModule,
    InputTextModule,
    NgIf,  
  ],
  exports: [SearchPanelComponent, FilterComponent],
  providers: [CategoryService],
})

export class SearchPanelComponentModule {}
