import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BkupcompComponent } from './Components/bkupcomp/bkupcomp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
// import { NlSubscriptionformComponent } from './newlayoutcomponents/nl-subscriptionform/nl-subscriptionform.component';
import { NlNewtestimonmialsComponent } from './newlayoutcomponents/nl-newtestimonmials/nl-newtestimonmials.component';
import { NlDowloadreadyassistappComponent } from './newlayoutcomponents/nl-dowloadreadyassistapp/nl-dowloadreadyassistapp.component';
import { DefaultComponentComponent } from './newlayoutcomponents/default-component/default-component.component';
import { NlSubscriptionConformationComponent } from './newlayoutcomponents/nl-subscription-conformation/nl-subscription-conformation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
   
    BkupcompComponent,
 
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
    // NlSubscriptionformComponent,
    NlNewtestimonmialsComponent,
    NlDowloadreadyassistappComponent,
    DefaultComponentComponent,
    NlSubscriptionConformationComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
