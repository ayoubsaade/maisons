import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private proper : PropertiesService, public router : Router) {  }

  ngOnInit() {
  }

  click(val) {
    this.router.navigate(['desc/'+val.id]);
  }
  vendre(){
    this.router.navigate(['vendre'])
  }
  louer(){
    this.router.navigate(['louer'])
  }

}
