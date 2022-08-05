import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nl-new-banner',
  templateUrl: './nl-new-banner.component.html',
  styleUrls: ['./nl-new-banner.component.scss']
})
export class NlNewBannerComponent implements OnInit {

  constructor() { }
// Book Services 
isSignIn:string = 'Submit →';
steps:number = 1;
actionButton:boolean = true;

proceedBtn(){
  this.steps++;
  if(this.steps == 2){
    this.isSignIn = 'Proceed →';
  }
  if(this.steps == 3){
    this.actionButton = false;
  }


}
  ngOnInit(): void {
  }

}
