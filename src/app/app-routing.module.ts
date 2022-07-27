import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './Components/blog-form/blog-form.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component'; 
import { LandingpagetwoComponent } from './newlayoutcomponents/landingpagetwo/landingpagetwo.component'; 
import { NlAboutusComponent } from './newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.component';
// import { NlAllsubscriptionplansComponent } from './newlayoutcomponents/nl-allsubscriptionplans/nl-allsubscriptionplans.component';
import {DefaultComponentComponent} from './newlayoutcomponents/default-component/default-component.component'
const routes: Routes = [
  { path: 'blogform', component: BlogFormComponent },
  { path: '', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/landingpagetwo.module').then(m => m.LandingpagetwoModule)  },

  // { path: '#aboutus', component:NlAboutusComponent  },
  { path: 'h1', component:LandingpageComponent  },
  {path: 'default', component:DefaultComponentComponent},
  { path: 'subscriptionplans', loadChildren: () => import('./newlayoutcomponents/nl-new-subscribe/nl-new-subscribe.module').then(m => m.NlNewSubscribeModule) },


  { path: 'aboutus', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.module').then(m => m.NlAboutusModule) }

// C:\Users\sures\Angular projects\ra_b2c\src\app\newlayoutcomponents\landingpagetwo\nl-aboutus\nl-aboutus.module.ts

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
