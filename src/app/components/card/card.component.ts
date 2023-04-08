import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { IAd } from 'src/app/interfaces/i-ad';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() ad: any | undefined;
}
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [RouterLink, NgIf, SkeletonModule ],
})
export class CardComponentModule {}

