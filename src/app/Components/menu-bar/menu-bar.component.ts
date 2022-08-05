import { Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NlSigninPopComponent } from 'src/app/newlayoutcomponents/nl-signin-pop/nl-signin-pop.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

 

 proceed(){

      this.popup.open(NlSigninPopComponent)
  }


  constructor(@Inject(DOCUMENT) private document: Document, private readonly popup: MatDialog) { }

@HostListener("document:scroll")
scrollfunction(){
  if(this.document.documentElement.scrollTop > 800){
    $(".wrapper").addClass("active");
  }
  else{
    $(".wrapper").removeClass("active");
  }
}





  ngOnInit(): void {
  }
 

}
