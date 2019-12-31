import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../Services/properties.service';
import { WordBankService } from '../Services/word-bank.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() id: number = undefined;
  @Input() urlImg: String = undefined;
  @Input() adress: String = undefined;
  @Input() city: String = undefined;
  @Input() urlMap: String = undefined;
  @Input() type: String = undefined;

  @Input() prix: String = undefined;
  @Input() nbChambre: number = undefined;
  @Input() nbSalleBain: number = undefined;
  @Input() nbMetreCarre: number = undefined;



  constructor(public router: Router, private propService : PropertiesService, 
    private wordBank : WordBankService) { }

  ngOnInit() {

  }

  clicked() {
    this.router.navigate(['/desc/' + this.id]);
  }

}
