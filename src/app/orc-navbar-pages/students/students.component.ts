import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studentData=[
    {name:'Annette Black',name2:'Annette Black'},
    {name:'Marvin McKinney',name2:'Annette Black'},
    {name:'Annette Black',name2:'Annette Black'},
    {name:'Annette Black',name2:'Annette Black'},
    {name:'Annette Black',name2:'Annette Black'},

  ]
}
