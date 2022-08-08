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
closepopup: boolean = true;
previousIcon: boolean = false;
proceedBtn(){
  this.steps++;
  if(this.steps == 2){
    this.isSignIn = 'Proceed →';
    this.previousIcon = true;
    this.closepopup = false;
  }
  if(this.steps == 3){
    this.actionButton = false;
  }


}
previousBtn(){
  console.log('back');
  
this.steps--;
this.closepopup = true;
this.previousIcon = false;
this.isSignIn = 'Submit →'
}
// closeBtn(){
//   // booKservices.toggle();
// }

  ngOnInit(): void {
  }

}
