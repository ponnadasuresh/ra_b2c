import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { HomeVideoComponent } from './Components/home-video/home-video.component';
import { HomeFeaturesSectionComponent } from './Components/home-features-section/home-features-section.component';
import { NotionCreatorsComponent } from './Components/notion-creators/notion-creators.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MenuBarComponent,
    HomeBannerComponent,
    HomeVideoComponent,
    HomeFeaturesSectionComponent,
    NotionCreatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
