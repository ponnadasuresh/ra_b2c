import { Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document  ) { }

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
