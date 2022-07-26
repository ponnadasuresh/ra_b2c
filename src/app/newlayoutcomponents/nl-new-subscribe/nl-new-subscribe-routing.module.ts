import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NlNewSubscribeComponent } from './nl-new-subscribe.component';

const routes: Routes = [{ path: '', component: NlNewSubscribeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NlNewSubscribeRoutingModule { }
