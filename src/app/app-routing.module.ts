import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './Components/blog-form/blog-form.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component'; 
import { LandingpagetwoComponent } from './newlayoutcomponents/landingpagetwo/landingpagetwo.component'; 
import { NlAboutusComponent } from './newlayoutcomponents/landingpagetwo/nl-aboutus/nl-aboutus.component';
import { NlAllsubscriptionplansComponent } from './newlayoutcomponents/nl-allsubscriptionplans/nl-allsubscriptionplans.component';
import {DefaultComponentComponent} from './newlayoutcomponents/default-component/default-component.component'
const routes: Routes = [
  { path: 'blogform', component: BlogFormComponent },
  { path: '', component:LandingpagetwoComponent  },
  { path: '#aboutus', component:NlAboutusComponent  },
  { path: 'h1', component:LandingpageComponent  },
  { path: 'subscriptionplans', component:NlAllsubscriptionplansComponent  },
  {path: 'default', component:DefaultComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
