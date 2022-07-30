import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NlAboutusComponent } from './nl-aboutus.component';


const routes: Routes = [
  {
    path:'#aboutus', component: NlAboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NlAboutusRoutingModule { }
