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
    {img:'assets/images/book1.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    {img:'assets/images/book2.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    {img:'assets/images/book3.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    {img:'assets/images/book4.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
   
    {img:'assets/images/book4.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    {img:'assets/images/book4.png',author:'Author Name',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
   
     ]
     resource = [
       {nm:'Braille'}, {nm:'Large prints'}, {nm:'Aids and kits'}, {nm:'Electoric devices'}, {nm:'Video'},
     ]
}
