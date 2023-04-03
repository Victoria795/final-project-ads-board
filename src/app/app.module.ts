import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './modules/main-page/main-page.module';
import { CreateAdModule } from './modules/create-ad/create-ad.module';
import { HeaderComponentModule } from './components/header/header.component';
import { SearchPanelComponentModule } from './components/search-panel/search-panel.component';
import { MyAdsModule } from './modules/my-ads/my-ads.module';
import { MySettingsModule } from './modules/my-settings/my-settings.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
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
        MySettingsModule

    ]
})
export class AppModule { }
