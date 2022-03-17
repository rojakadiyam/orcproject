import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.scss']
})
export class ShopProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list =[
    {lists:'Catalog number'},{lists:'Publisher'},{lists:'Resource type'},{lists:'Grade level'},{lists:'Copy number'},
    {lists:'Volume count'},{lists:'ISBN'},{lists:'Copyright year'},{lists:'Subject'},{lists:'Pages'},
    {lists:'Author'},
  ]
}
