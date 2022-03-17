import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-forms',
  templateUrl: './download-forms.component.html',
  styleUrls: ['./download-forms.component.scss']
})
export class DownloadFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadData=[
    {dn:'Downloadable form for Student registration'},
    {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'},
    {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'},
    {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'}, {dn:'Downloadable form for Student registration'},
    
  ]

}
