import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() name: string;
  @Input() username: string;
  @Input() email: string;
  @Input() id: Number;
  @Input() border: Boolean = true;
  @Input() isActive: Boolean = false;

  constructor() { }

}
