import { AuthorizationModalComponent } from 'src/app/modals/authorization-modal/authorization-modal.component';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthorizationModalComponentModule } from 'src/app/modals/authorization-modal/authorization-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  
  isAuthorised = this._authService.isLoggined();

  items: MenuItem[] = [
    {
      label: 'Мои объявления',
      routerLink: '/my-ads'
    },
    {
      label: 'Настройки',
      routerLink: '/my-settings'
    },
    {
      label: 'Выйти',
      command: () => this._authService.logOut()
    }
  ]
  constructor(
    private _dialogService: DialogService,
    private _authService: AuthService
  ) {}
  
  showAuthorizationDialog(){
    this._dialogService.open(AuthorizationModalComponent,{
    header: 'Авторизация',
    width: '416px',
      })
  }
}
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ButtonModule,
    MenuModule,
    NgIf,
    DialogModule,
    AuthorizationModalComponentModule
  ],
  exports: [HeaderComponent],
  providers: [ DialogService ],
})

export class HeaderComponentModule {}



