import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  author:string='';
  para:string = '';
  img:string='';
    constructor(){}
  
    cardData=[
      {img:'assets/images/book1.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'assets/images/book2.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'assets/images/book3.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'assets/images/book4.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'assets/images/book5.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
       ]

  ngOnInit(): void {
  }

}
