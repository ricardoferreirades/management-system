import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'sweetalert';
import {User} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // api url
  api: string = environment.API_URL;

  usersSelected = new Subject<User[]>();
  albumsSelected = new Subject<any[]>();
  photos = new Subject<any[]>();

  constructor(
    public http: HttpClient
  ) { }


  // custom error message
  errorMessage(msg) {
    if (!msg) {return swal('Error', 'Sorry, an unexpected error happened. Please contact support.', 'error'); }
    swal('Error', `${msg}`, 'error');
  }

  // method to get all users
  getUsers() {
    return this.http.get<User[]>(`${this.api}/users`);
  }

  // method to get albums from userId
  // and update the list of album
  getUserAlbums(id: number) {
    this.http.get<any[]>(`${this.api}/users/${id}/albums`)
    .subscribe(
      // success
      res => {
        this.albumsSelected.next(res);
      },
      // error
      err => {
        this.errorMessage(null);
      }
    );
  }

  // method to get photos from albums' ids
  // and updates the list of photos
  getPhotos(query: string) {
    this.http.get<any[]>(`${this.api}/photos?${query}`)
    .subscribe(
      // success
      res => {
        this.photos.next(res);
      },
      // error
      err => {
        this.errorMessage(null);
      }
    );
  }

  // method to get the amount of albums' photos
  getPhotosLength(query: string) {
    return this.http.get<any[]>(`${this.api}/photos?${query}`);
  }

}
