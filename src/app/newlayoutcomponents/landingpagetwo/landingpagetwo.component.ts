import { Component, OnInit, HostListener, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landingpagetwo',
  templateUrl: './landingpagetwo.component.html',
  styleUrls: ['./landingpagetwo.component.scss']
})
export class LandingpagetwoComponent implements OnInit {

  showScreen = true;
  subscribeplans = false;
  color= ''

  constructor(@Inject(DOCUMENT) private document: Document) { 
  }

  //navbar header background change
  @HostListener("document:scroll")
scrollfunction(){
  if(this.document.documentElement.scrollTop > 800){
    $(".wrapper").addClass("active");
  }
  else{
    $(".wrapper").removeClass("active");
  }
}
  //navbar header background change


  ngOnInit(): void {
    
  }
changeColor(){
  this.color = '#fff9e7'
}
  subscribeNow(){
    // alert('hiii');
    this.showScreen = false;
    this.subscribeplans = true;
    this.changeColor()
  }

}
