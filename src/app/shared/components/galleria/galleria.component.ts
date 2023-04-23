import { Component, Input, NgModule } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent {
  @Input() public images: any;
  public selectedImage: number = 0;
}
@NgModule({
  declarations: [GalleriaComponent],
  exports: [GalleriaComponent],
  imports: [ NgIf, NgFor, NgClass, SkeletonModule],
})
export class GalleriaComponentModule {}


