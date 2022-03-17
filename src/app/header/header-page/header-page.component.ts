import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // <p>Annette Black</p>
  // <p>6391 Elgin St. Celina, Delaware 10299</p>
lists=[
  {p1:'Annette Black',p2:'6391 Elgin St. Celina, Delaware 10299'},
  {p1:'Annette Black',p2:'6391 Elgin St. Celina, Delaware 10299'},
  {p1:'Annette Black',p2:'6391 Elgin St. Celina, Delaware 10299'},
  {p1:'Annette Black',p2:'6391 Elgin St. Celina, Delaware 10299'},
  {p1:'Annette Black',p2:'6391 Elgin St. Celina, Delaware 10299'},
]
}
