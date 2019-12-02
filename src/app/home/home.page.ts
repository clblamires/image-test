import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image = {}

  constructor() {
    this.image = {
      alt: "Taco",
      src: "assets/taco.jpg"
    };
  }

  selectedFood( event ){
    // console.log("Changed segment", event.detail.value )
    if( event.detail.value == "taco"){
      this.image = {
        alt: "Taco",
        src: "assets/taco.jpg"
      };
    } else {
      this.image = {
        alt: "Burrito",
        src: "assets/burrito.jpg"
      };
    }
  }

}
