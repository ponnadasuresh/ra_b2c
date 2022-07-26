import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecentPopularNewsComponent } from './Components/recent-popular-news/recent-popular-news.component';
import { BlogFormComponent } from './Components/blog-form/blog-form.component';
import { RecentPostsComponent } from './Components/recent-posts/recent-posts.component';
import { NlHomeBannerComponent } from './newlayoutcomponents/nl-home-banner/nl-home-banner.component';
import { LandingpagetwoComponent } from './newlayoutcomponents/landingpagetwo/landingpagetwo.component';
import { NlOurservicesComponent } from './newlayoutcomponents/nl-ourservices/nl-ourservices.component';
import { NlSubscriptionplanComponent } from './newlayoutcomponents/nl-subscriptionplan/nl-subscriptionplan.component';
import { NlProfessionComponent } from './newlayoutcomponents/landingpagetwo/nl-profession/nl-profession.component';
import { NlArchivementsComponent } from './newlayoutcomponents/landingpagetwo/nl-archivements/nl-archivements.component';
import { NlEndorsementComponent } from './newlayoutcomponents/landingpagetwo/nl-endorsement/nl-endorsement.component';
import { NlServicepartnersComponent } from './newlayoutcomponents/landingpagetwo/nl-servicepartners/nl-servicepartners.component';
import { NlBoardmembersComponent } from './newlayoutcomponents/landingpagetwo/nl-boardmembers/nl-boardmembers.component';
import { NlBlogComponent } from './newlayoutcomponents/landingpagetwo/nl-blog/nl-blog.component';
import { NlAboutusComponent } from './newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.component';
import { NlFootercardsComponent } from './newlayoutcomponents/landingpagetwo/nl-footercards/nl-footercards.component';
import { NlMainfooterComponent } from './newlayoutcomponents/landingpagetwo/nl-mainfooter/nl-mainfooter.component';
import { TestimonialsComponent } from './newlayoutcomponents/landingpagetwo/testimonials/testimonials.component';
import { NlNewBannerComponent } from './newlayoutcomponents/landingpagetwo/nl-new-banner/nl-new-banner.component';
import { NlHomeVideoComponent } from './newlayoutcomponents/landingpagetwo/nl-home-video/nl-home-video.component';
import { NlCollabratedwithComponent } from './newlayoutcomponents/nl-collabratedwith/nl-collabratedwith.component';
import { NlAllsubscriptionplansComponent } from './newlayoutcomponents/nl-allsubscriptionplans/nl-allsubscriptionplans.component';
import {  NlBuynowscreenComponent } from './newlayoutcomponents/nl-buynowscreen/nl-buynowscreen.component';
import { SubscribeinformationComponent } from './newlayoutcomponents/subscribeinformation/subscribeinformation.component';
import { NlSubscriptionformComponent } from './newlayoutcomponents/nl-subscriptionform/nl-subscriptionform.component';
import { NlNewtestimonmialsComponent } from './newlayoutcomponents/nl-newtestimonmials/nl-newtestimonmials.component';
import { NlDowloadreadyassistappComponent } from './newlayoutcomponents/nl-dowloadreadyassistapp/nl-dowloadreadyassistapp.component';
import { DefaultComponentComponent } from './newlayoutcomponents/default-component/default-component.component';


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
    RecentPostsComponent,
    NlHomeBannerComponent,
    LandingpagetwoComponent,
    NlOurservicesComponent,
    NlSubscriptionplanComponent,
    NlProfessionComponent,
    NlArchivementsComponent,
    NlEndorsementComponent,
    NlServicepartnersComponent,
    NlBoardmembersComponent,
    NlBlogComponent,
    NlAboutusComponent,
    NlFootercardsComponent,
    NlMainfooterComponent,
    TestimonialsComponent,
    NlNewBannerComponent,
    NlHomeVideoComponent,
    NlCollabratedwithComponent,
    NlAllsubscriptionplansComponent,
    NlBuynowscreenComponent,
    SubscribeinformationComponent,
    NlSubscriptionformComponent,
    NlNewtestimonmialsComponent,
    NlDowloadreadyassistappComponent,
    DefaultComponentComponent
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
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
