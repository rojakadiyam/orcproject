import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
notification = [
  {a1:'New Student is added !'},
  {a1:'Your order #12345 has been placed successfully'},
  {a1:'Your order #12345 has been Dispatched !'},
  {a1:'Your order #12345 has been Delivered !'},
]
}
