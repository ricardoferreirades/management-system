import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() searchedTerm: string;
  @Input() orderby: String = 'name';
  currentUserSeletcted: Number;
  users: any = [];

  constructor (
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // getting users
    this.usersService.getUsers()
    .subscribe(
      // success
      res => {
        this.usersService.usersSelected.next(res);
      },
      // error
      err => {
        this.usersService.errorMessage(null);
      }
    );

    // updating list
    this.usersService.usersSelected
    .subscribe(
      res => {
        this.users = res;
      }
    );
  }

// setting user active
// getting user albums
  onClick(idx: number, id: number): void {
    if (this.currentUserSeletcted === id) { return; }

    this.currentUserSeletcted = id;

    const items = document.querySelectorAll('.user-item');
    items[idx].classList.add('active');

    for ( let i = 0; i < items.length; i++ ) {
      if (i !== idx) {
        items[i].classList.remove('active');
      }
    }

    this.usersService.getUserAlbums(id);

  }

}
