import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
show:boolean = true;
hide:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  tableData=[
    {name:'1-0002-1102',address:'Description of the book',city:'1',state:'Consumable'},
    {name:'1-0002-1102',address:'Description of the book',city:'1',state:'Non - Consumable'},
    ]


    successOrder(){
      this.show = false;
      this.hide = true;
    }
}
