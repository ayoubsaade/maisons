import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imgs: Array<Array<string>> = [];
  first : Array<string> = [];
  showcasing : string = "1.jpg";

  @Input() prop: any;

  constructor(private propService: PropertiesService) { }

  ngOnInit() {
    const NBCOL = 6;
    const nbGroupe = Math.floor(this.prop.size / NBCOL);
    const reste = this.prop.size % NBCOL;

    for (let i = 0; i < nbGroupe; i++) {
      this.imgs.push([])
      for (let j = 0; j < NBCOL; j++) {
        this.imgs[i].push((i * NBCOL + j+1).toString() + ".jpg")
      }
    }
    if (reste != 0) {
      this.imgs.push([])
      for (let i = 0; i < reste; i++) {
        this.imgs[this.imgs.length - 1].push((nbGroupe * NBCOL + i+1).toString() + ".jpg")
      }
    }
    this.first = this.imgs[0];
    this.imgs.shift();
  }

  changeImg(file){
    this.showcasing = file
  }

}
