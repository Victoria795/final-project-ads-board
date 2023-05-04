import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { IAd } from 'src/app/shared/interfaces/i-ad';
import { SkeletonModule } from 'primeng/skeleton';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() ad: IAd | undefined;
}
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [RouterLink, NgIf, SkeletonModule, DatePipe, CurrencyPipe ],
})
export class CardComponentModule {}

