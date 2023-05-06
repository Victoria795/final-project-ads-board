import { CommonModule } from '@angular/common';
import { AuthorizationModalComponent } from 'src/app/modals/authorization-modal/authorization-modal.component';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthorizationModalComponentModule } from 'src/app/modals/authorization-modal/authorization-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { UserService } from 'src/app/core/services/user.service';
import { IUserInfo } from '../../interfaces/i-user-info';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  public user!: IUserInfo;
  public isLoggined: boolean | undefined;
  
  constructor(
    private _dialogService: DialogService,
    private _authService: AuthService,
    private _confirmationService: ConfirmationService,
    private _userService: UserService
  ) {}

  public ngOnInit(): void {
    this._authService.isLoggined$.subscribe(
      (res) => this.isLoggined = res
    )
    this._userService.getUserInfo().subscribe(
      (res) => this.user = res
    )
  }

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
      command: () => this.confirmLogOut()
    }
  ]

  confirmLogOut() {
    this._confirmationService.confirm({
        message: 'Вы уверены, что хотите выйти?',
        header: 'Подтверждение',
        accept: () => {
            this._authService.logOut()
        },
        reject: () => {
          return
        }
    });
  } 
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
    AuthorizationModalComponentModule,
    CommonModule,
    ConfirmDialogModule
  ],
  exports: [HeaderComponent],
  providers: [ DialogService, ConfirmationService ],
})

export class HeaderComponentModule {}



