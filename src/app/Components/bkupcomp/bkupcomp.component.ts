import { Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bkupcomp',
  templateUrl: './bkupcomp.component.html',
  styleUrls: ['./bkupcomp.component.scss']
})
export class BkupcompComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document  ) { }

  @HostListener("document:scroll")
  scrollfunction(){
    if(this.document.documentElement.scrollTop > 0){
      $(".wrapper").addClass("active");
    }
    else{
      $(".wrapper").removeClass("active");
    }
  }

  ngOnInit(): void {
  }

}
