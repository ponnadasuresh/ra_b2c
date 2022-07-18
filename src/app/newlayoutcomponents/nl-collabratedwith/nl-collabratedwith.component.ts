import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nl-collabratedwith',
  templateUrl: './nl-collabratedwith.component.html',
  styleUrls: ['./nl-collabratedwith.component.scss']
})
export class NlCollabratedwithComponent implements OnInit {

  constructor() { }
  collabration: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit(): void {
  }

}
