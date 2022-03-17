import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tableData=[
    {name:'12345',number:'20.02.2022',address:'Student Name',city:'6391 Elgin St. Celina, Delaware 10299',state:'New'},
    {name:'12345', number:'20.02.2022',address:'Student Name',city:'6391 Elgin St. Celina, Delaware 10299',state:'In Process'},
    ]
}
