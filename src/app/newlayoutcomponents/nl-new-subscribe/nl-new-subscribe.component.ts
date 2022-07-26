import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-nl-new-subscribe',
  templateUrl: './nl-new-subscribe.component.html',
  styleUrls: ['./nl-new-subscribe.component.scss']
})
export class NlNewSubscribeComponent implements OnInit {

  constructor() { }
  buynowScreen = false;

  @ViewChild('textCreate', { static: false }) textCreate!: ElementRef;
 
  @ViewChild('carouselHolder', { static: false })
  carouselHolder!: ElementRef;
  isCarouselFor1stTabVisible = false;

  @ViewChild('carouselHolder2', { static: false })
  carouselHolder2!: ElementRef;
  isCarouselFor2stTabVisible = false;

  ngAfterViewChecked() {
    this.showCarousel();
    this.showCarousel2();
  }

  showCarousel(): void {
    if (this.carouselHolder.nativeElement.clientWidth > 0 && !this.isCarouselFor1stTabVisible) {
      setTimeout(() => {
        // console.log(this.carouselHolder.nativeElement);
        this.isCarouselFor1stTabVisible = true;
      }, 0);
    }
  }
  showCarousel2(): void {
    if (this.carouselHolder2.nativeElement.clientWidth > 0 && !this.isCarouselFor2stTabVisible) {
      setTimeout(() => {
        // console.log(this.carouselHolder.nativeElement);
        this.isCarouselFor2stTabVisible = true;
      }, 0);
    }
  }


  newsubscription: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    // center: true,
    dots: true,
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
  scroll() {
    this.buynowScreen = true;
        this.textCreate.nativeElement.scrollIntoView(
          {behavior: 'smooth'}
        );
       
        
    }
  ngOnInit(): void {
  }

}
