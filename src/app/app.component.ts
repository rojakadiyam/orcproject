import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orc';
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
}
