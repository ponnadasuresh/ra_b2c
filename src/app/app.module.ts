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
import { WebsiteZerofrictionComponent } from './Components/website-zerofriction/website-zerofriction.component';
import { WebsiteBuilderComponent } from './Components/website-builder/website-builder.component';
import { CommunityTemplatesComponent } from './Components/community-templates/community-templates.component';
import { BeautifulLandingPagesComponent } from './Components/beautiful-landing-pages/beautiful-landing-pages.component';
import { GetstartedFirstsiteComponent } from './Components/getstarted-firstsite/getstarted-firstsite.component';
import { SuperFooterCornersComponent } from './Components/super-footer-corners/super-footer-corners.component';
import { FooterChatboxComponent } from './Components/footer-chatbox/footer-chatbox.component';
import { BkupcompComponent } from './Components/bkupcomp/bkupcomp.component';
import { BannerTextAnimationComponent } from './Components/banner-text-animation/banner-text-animation.component';
import { CarePartnerComponent } from './Components/care-partner/care-partner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecentPopularNewsComponent } from './Components/recent-popular-news/recent-popular-news.component';
import { BlogFormComponent } from './Components/blog-form/blog-form.component';
import { RecentPostsComponent } from './Components/recent-posts/recent-posts.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MenuBarComponent,
    HomeBannerComponent,
    HomeVideoComponent,
    HomeFeaturesSectionComponent,
    NotionCreatorsComponent,
    WebsiteZerofrictionComponent,
    WebsiteBuilderComponent,
    CommunityTemplatesComponent,
    BeautifulLandingPagesComponent,
    GetstartedFirstsiteComponent,
    SuperFooterCornersComponent,
    FooterChatboxComponent,
    BkupcompComponent,
    BannerTextAnimationComponent,
    CarePartnerComponent,
    RecentPopularNewsComponent,
    BlogFormComponent,
    RecentPostsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
