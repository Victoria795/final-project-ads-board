import { Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

}
@NgModule({
  declarations: [SearchPanelComponent],
  imports: [
    ButtonModule,
    InputTextModule
  ],
  exports: [SearchPanelComponent],
  providers: [],
})

export class SearchPanelComponentModule {}
