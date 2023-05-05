import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './modules/main-page/main-page.module';
import { CreateAdModule } from './modules/create-ad/create-ad.module';
import { HeaderComponentModule } from './shared/components/header/header.component';
import { SearchPanelComponentModule } from './shared/components/search-panel/search-panel.component';
import { MyAdsModule } from './modules/my-ads/my-ads.module';
import { MySettingsModule } from './modules/my-settings/my-settings.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

const mapConfig: YaConfig = {
    apikey: '717ccef5-a34f-42fa-882d-fc2791edda51',
    lang: 'ru_RU',
  };

registerLocaleData(localeRu);

@NgModule({
    declarations: [ AppComponent, NotFoundComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
          },
        { provide: HTTP_INTERCEPTORS, 
          useClass: ErrorInterceptor, 
          multi: true },
          MessageService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MainPageModule,
        CreateAdModule,
        HeaderComponentModule,
        SearchPanelComponentModule,
        MyAdsModule,
        MySettingsModule,
        HttpClientModule,
        ToastModule,
        AngularYandexMapsModule.forRoot(mapConfig),
    ],
})
export class AppModule { }
