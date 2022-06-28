import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './Components/blog-form/blog-form.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component'; 

const routes: Routes = [
  { path: 'blogform', component: BlogFormComponent },
  { path: '', component:LandingpageComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
