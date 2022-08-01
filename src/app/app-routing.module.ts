import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponentComponent} from './newlayoutcomponents/default-component/default-component.component'
import { NlNewaboutusComponent } from './newlayoutcomponents/nl-newaboutus/nl-newaboutus.component';
const routes: Routes = [
  { path : 'newaboutus', component:NlNewaboutusComponent},
  { path: '', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/landingpagetwo.module').then(m => m.LandingpagetwoModule)  },
  {path: 'default', component:DefaultComponentComponent},
  { path: 'subscriptionplans', loadChildren: () => import('./newlayoutcomponents/nl-new-subscribe/nl-new-subscribe.module').then(m => m.NlNewSubscribeModule) },
  { path: 'aboutus', loadChildren: () => import('./newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.module').then(m => m.NlAboutusModule) }

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
