import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {DefaultComponentComponent} from './newlayoutcomponents/default-component/default-component.component'
import { NlGridComponent } from './newlayoutcomponents/nl-grid/nl-grid.component';
import { NlNewaboutusComponent } from './newlayoutcomponents/nl-newaboutus/nl-newaboutus.component';
import { NlSubscriptionConformationComponent } from './newlayoutcomponents/nl-subscription-conformation/nl-subscription-conformation.component';
import { NlBookServicesComponent } from './newlayoutcomponents/nl-book-services/nl-book-services.component';
import { NlSigninPopComponent } from './newlayoutcomponents/nl-signin-pop/nl-signin-pop.component';
import { ContactUsComponent } from './newlayoutcomponents/contact-us/contact-us.component';
// import { NlSubscriptionConformationComponent } from './newlayoutcomponents/nl-subscription-conformation/nl-subscription-conformation.component';
const routes: Routes = [



  // { path: 'contactus', loadChildren: () => import('./newlayoutcomponents/contact-us/contact-us.module').then(m => m.ContactUsModule)  },
  { path : 'contactus', component:ContactUsComponent},
  { path : 'newaboutus', component:NlNewaboutusComponent},
  { path : 'grid' , component: NlGridComponent},
  { path: '', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/landingpagetwo.module').then(m => m.LandingpagetwoModule)  },
  {path: 'default', component:DefaultComponentComponent},
  { path: 'subscriptionplans', loadChildren: () => import('./newlayoutcomponents/nl-new-subscribe/nl-new-subscribe.module').then(m => m.NlNewSubscribeModule) },
  { path: 'aboutus', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.module').then(m => m.NlAboutusModule) },
  // { path: 'subscritionconformation', component:NlSubscriptionConformationComponent}
  { path: 'bookservices', component:NlBookServicesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
