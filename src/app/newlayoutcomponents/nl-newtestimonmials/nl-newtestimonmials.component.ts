import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nl-newtestimonmials',
  templateUrl: './nl-newtestimonmials.component.html',
  styleUrls: ['./nl-newtestimonmials.component.scss']
})
export class NlNewtestimonmialsComponent implements OnInit {


  reviews = [
    
    {
    name: "Monkey D Luffy",
    info : "Protoganist of One Piece",
    review : "I am Monkey D Luffy. I am the one who is going to best you guys and become king of pirates",
    image : "../../../assets/images/luffy-temp.jfif"
  },

  {
    name: "Shanks",
    info : "Mysterious  person",
    review : "Your actions will change the course of future for the best or the worst",
    image : "../../../assets/images/shanks-temp.jfif"
  },

  {
    name: "Naruto",
    info : "Protoganist of Naruto",
    review : "I am Monkey D Luffy. I am the one who is going to best you guys and become king of pirates",
    image : "../../../assets/images/naruto-temp.jfif"
  },

  {
    name: "Madara",
    info : "Antoganist of One Piece",
    review : "There is no real peace in this world",
    image : "../../../assets/images/madara-temp.png"
  },

]

  constructor() { }
  testimonials: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  ngOnInit(): void {
  }

}
