import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nl-new-banner',
  templateUrl: './nl-new-banner.component.html',
  styleUrls: ['./nl-new-banner.component.scss']
})
export class NlNewBannerComponent implements OnInit {

  constructor() { }
// Book Services 
serviceEnable:boolean = false;
isSignIn:string = 'Submit →';
steps:number = 2;
actionButton:boolean = true;
closepopup: boolean = false;
previousIcon: boolean = true;
hide:boolean = true;

subscriptionPlans = [
  {
    id:1,
    title: 'we are a new Startup',
    img:'./assets/images/ra_towing.svg',
    isSelect:false
  },
  {
    id:2,
    title: 'we are a new Startup',
    img:'./assets/images/ra_towing.svg',
    isSelect:false
  },
  {
    id:3,
    title: 'we are a new Startup',
    img:'./assets/images/ra_towing.svg',
    isSelect:false
  },
  {
    id:4,
    title: 'we are a new Startup',
    img:'./assets/images/ra_towing.svg',
    isSelect:false
  }
]

yourSubscriptions = [
  {
    id:1,
    serviceType: 'Battery Jumpstart',
    price: 9234,
    src: './assets/images/nl_ityre.svg',
    gst: '+18% GST',
    isSelect:false
  },
  {
    id:2,
    serviceType: 'Battery Jumpstart',
    price: 9234,
    src: './assets/images/nl_ityre.svg',
    gst: '+18% GST',
    isSelect:false
  },
  {
    id:3,
    serviceType: 'Battery Jumpstart',
    price: 9234,
    src: './assets/images/nl_ityre.svg',
    gst: '+18% GST',
    isSelect:false
  },
  {
    id:4,
    serviceType: 'Battery Jumpstart',
    price: 9234,
    src: './assets/images/nl_ityre.svg',
    gst: '+18% GST',
    isSelect:false
  }
]

selectVehicle(v: any) {
  for (const x of this.subscriptionPlans) {
    Object.assign(x, {isSelect: false});
  }
  this.subscriptionPlans.filter((y: any) => v.id === y.id)[0].isSelect = true;
}

subscriptionPlansList(s: any){
  for (const x of this.yourSubscriptions) {
    Object.assign(x, {isSelect: false});
  }
  this.yourSubscriptions.filter((y: any) => s.id === y.id)[0].isSelect = true;
}




proceedBtn(){
  this.steps++;

if(this.steps == 1){
  this.closepopup = true;
  this.previousIcon = false;
}

  if(this.steps == 2){
    this.isSignIn = 'Proceed →';
    this.previousIcon = true;
    this.closepopup = true;
  }
  if(this.steps == 3){
    this.actionButton = false;
  }


}
previousBtn(){
  console.log(this.steps)
  this.steps--;

}
// closeBtn(){
//   // booKservices.toggle();
// }

  ngOnInit(): void {
    console.log(this.steps)
  }

}
