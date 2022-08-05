import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nl-book-services',
  templateUrl: './nl-book-services.component.html',
  styleUrls: ['./nl-book-services.component.scss']
})
export class NlBookServicesComponent implements OnInit {

  constructor() { }
  isSignIn:string = 'Submit →';
  steps:number = 1;
  actionButton:boolean = true;
  

  ngOnInit(): void {
    console.log(this.steps);
  }

  proceedBtn(){
    this.steps++;
    if(this.steps == 2){
      this.isSignIn = 'Proceed →';
    }
    if(this.steps == 3){
      this.actionButton = false;
    }


  }


}


// Proceed →
