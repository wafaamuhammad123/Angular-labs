import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  imgSrc = [
    'assets/Images/img1.jpg',
    'assets/Images/img2.jpeg',
    'assets/Images/img3.jpeg',
    'assets/Images/img4.jpeg'
  ];
  img="assets/Images/1.jpg";
  loc=0;

  imgInterval:any;
  
  prevImage(){
    if(this.loc>0){
      this.loc--;
    this.img = this.imgSrc[this.loc];
    }
  }

  nextImage(){
    if(this.loc<3){
      this.loc++;
      this.img = this.imgSrc[this.loc];
    } 
  }

  slideImage(){
    this.imgInterval = setInterval(() => {
      this.loc++;
      if(this.loc>3){
        this.loc=0;
      }
      this.img = this.imgSrc[this.loc];
    }, 1000);
  }

  stopImage(){
    clearInterval(this.imgInterval);
  }

}