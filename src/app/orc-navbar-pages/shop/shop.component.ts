import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardData=[
    {img:'assets/images/book1.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
    {img:'assets/images/book2.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
    {img:'assets/images/book3.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
    {img:'assets/images/book4.png',author:'Author Name',para:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
   
     ]
     resource = [
       {nm:'Braille'}, {nm:'Large prints'}, {nm:'Aids and kits'}, {nm:'Electoric devices'}, {nm:'Video'},
     ]
}
