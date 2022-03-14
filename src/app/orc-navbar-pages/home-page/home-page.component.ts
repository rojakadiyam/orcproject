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
      {img:'https://dummyimage.com/600x400/000/fff.jpg',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'https://dummyimage.com/600x400/000/fff.jpg',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'https://dummyimage.com/600x400/000/fff.jpg',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'https://dummyimage.com/600x400/000/fff.jpg',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      {img:'https://dummyimage.com/600x400/000/fff.jpg',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
       ]

  ngOnInit(): void {
  }

}
