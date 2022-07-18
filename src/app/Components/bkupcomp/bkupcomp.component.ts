import { Component, OnInit, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bkupcomp',
  templateUrl: './bkupcomp.component.html',
  styleUrls: ['./bkupcomp.component.scss']
})
export class BkupcompComponent implements OnInit {

  subscriptionplans: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:false,
        navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  @ViewChild('carouselHolder', { static: false })
  carouselHolder!: ElementRef;
  isCarouselFor1stTabVisible = false;

  ngAfterViewChecked() {
    this.showCarousel();
  }

  showCarousel(): void {
    if (this.carouselHolder.nativeElement.clientWidth > 0 && !this.isCarouselFor1stTabVisible) {
      setTimeout(() => {
        // console.log(this.carouselHolder.nativeElement);
        this.isCarouselFor1stTabVisible =  true;
      }, 0);
    }
  }


  ngOnInit(): void {
  }

}





