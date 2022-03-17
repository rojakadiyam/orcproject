import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableData=[
    {name:'Annette Black',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
    {name:'Marvin McKinney',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
    {name:'Annette Black',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
    {name:'Annette Black',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
    {name:'Annette Black',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
    {name:'Annette Black',address:'6391 Elgin St. Celina, Delaware 10299',city:'Orange',state:'California',zip:'78577'},
  ]

  order=[
    {a1:'Order number - 25156',a2:'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Feugiat hendrerit imperdiet elementum.' , a3:'Jason Bourne',a4:'25.02.2022',a5:'Delivered',a6:'25.02.2022'},
    {a1:'Order number - 25156',a2:'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Feugiat hendrerit imperdiet elementum.' , a3:'Jason Bourne',a4:'25.02.2022',a5:'Delivered',a6:'25.02.2022'},
    {a1:'Order number - 25156',a2:'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Feugiat hendrerit imperdiet elementum.' , a3:'Jason Bourne',a4:'25.02.2022',a5:'Delivered',a6:'25.02.2022'},

  ]
}
