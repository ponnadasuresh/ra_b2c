import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpagetwoComponent } from './landingpagetwo.component';

const routes: Routes = [
  {
    path:'', component:LandingpagetwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpagetwoRoutingModule { }
