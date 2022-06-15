import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private el: ElementRef  ) { }

@HostListener("document:scroll")
scrollfunction(){
  if(document.body.scrollHeight > 10){
    $(".navbar").addClass("active");
    console.log('added')
  }
  else if(document.body.scrollHeight  == 0)
    $(".navbar").removeClass("active");
    console.log('removed');
  
}




  ngOnInit(): void {
  }
 

}
