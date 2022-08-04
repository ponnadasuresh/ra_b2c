import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NlNewSubscribeRoutingModule } from './nl-new-subscribe-routing.module';
import { NlNewSubscribeComponent } from './nl-new-subscribe.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NlBuynowscreenComponent } from '../nl-buynowscreen/nl-buynowscreen.component';
import { SubscribeinformationComponent } from '../subscribeinformation/subscribeinformation.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NlSubscriptionformComponent } from '../nl-subscriptionform/nl-subscriptionform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NlSubscriptionConformationComponent } from '../nl-subscription-conformation/nl-subscription-conformation.component';


@NgModule({
  declarations: [
    NlNewSubscribeComponent,
    NlBuynowscreenComponent,
    NlSubscriptionformComponent,
    SubscribeinformationComponent,
    NlSubscriptionConformationComponent
  ],
  imports: [
    CommonModule,
    NlNewSubscribeRoutingModule,
    MatTabsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NlNewSubscribeModule { }
