import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hasAlbums: Boolean = false;
  allSelectControl: Boolean = false;
  allSelected: Boolean = false;
  showAddAlbum: Boolean = false;
  isSorting: Boolean = false;
  imagesLength = 0;
  order: String = 'cresc';
  albumsLength = 0;
  page: Number;
  itemsPerPage: Number = 10;

  constructor () {}

  // selecting or unselecting all albums
  selectAll() {

    if (!this.allSelectControl && this.allSelected === null ) {return; }

    if (this.allSelectControl && this.allSelected === false || this.allSelectControl && this.allSelected === null) {
      this.allSelected = true;
      return;
    }

    this.allSelected = false;
  }

  // event called when an album is unselected
  onUnselected(event): void {
    this.allSelected = event;
    this.allSelectControl = event;
  }

  // method called when the user's albums are loaded on albums component
  // showing or hiding the select all control
  onLoadAlbums(event): void {
    if (event.hasItems) { this.hasAlbums = true; }
    this.albumsLength = event.albumsLength;
  }

  // method called when the photos from albums are loaded
  // returns the amount images loaded
  onImagesLoad(event) {
    this.imagesLength = event.imagesLength;
  }

  // method called when an album is added
  onAlbumAdd(event) {
    this.showAddAlbum = false;
  }

  // method called when the page of images is changed
  // set a new value to the input property page
  onPageChange(event) {
    this.page = event;
  }
}
