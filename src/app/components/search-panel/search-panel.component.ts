import { Component, NgModule, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FilterComponent } from './filter/filter.component';
import { NgIf, NgFor } from '@angular/common';
import { CategoryService } from 'src/app/core/services/category.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
public isFilterOpened:boolean = false
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
    RouterLink
  ],
  exports: [SearchPanelComponent, FilterComponent],
  providers: [CategoryService],
})

export class SearchPanelComponentModule {}
