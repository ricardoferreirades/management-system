import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnChanges {
  @Input() allSelected: Boolean = false;
  @Input() showAddAlbum: Boolean = false;
  @Output() albumAdded: EventEmitter<any> = new EventEmitter();
  @Output() unselected: EventEmitter<any> = new EventEmitter();
  @Output() loadedAlbums: EventEmitter<any> = new EventEmitter();

  albums: any[] = [];
  albumsSelected: number[] = [];
  addAlbumForm: FormGroup;
  userId: Number;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder
  ) {
    // methodo to initializae the add album form
    this.initAddAlbumForm();
  }

  // methodo called when the component is ready
  ngOnInit() {
    // method called to listen the albums changes
    this.usersService.albumsSelected
    .subscribe(
      res => {
        res.forEach(v => {
          v.selected = false;
        });

        this.albums = res;
        this.userId = res[0].userId;

        this.getPhotosLength(res);

        // cleaning album list
        this.usersService.getPhotos('albumId=');

        // block used to emit events to the parent
        if (this.albums.length) { this.loadedAlbums.emit({
          hasItems: true,
          albumsLength: this.albums.length
        }); }
      }
    );

  }

  // Reactive form to add new album
  // requiring a name of album to add
  initAddAlbumForm() {
    this.addAlbumForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  // biding changes on component
  // selecting albums though the control
  ngOnChanges(changes: SimpleChanges): void {

    if (this.allSelected === null) {
      this.loadPhotos();
      return;
    }

    if ( this.allSelected ) {
      this.albums.forEach(v => {
        v.selected = true;
      });
    } else {
      this.albums.forEach(v => {
        v.selected = false;
      });
    }

    this.loadPhotos();

  }

  // binding album selected
  // getting photos from albums selected
  onCheckChange(id: number) {

    this.loadPhotos();

    // fiding unselected items
    // changing the selected state
    const unselectedItems = this.albums.filter( v => {
      return v.selected === false;
    });

    // emiting status to the parent
    // only if there is more than one selected and less then all
    if ( unselectedItems.length && unselectedItems.length !== this.albums.length ) {
      this.unselected.emit(null);
      return;
    }

    // binding if there are items unselected
    // emiting status to the parent
    if ( unselectedItems.length ) {
      this.unselected.emit(false);
      return;
    }

    // biding unselected items
    // emiting status to the event
    if ( !unselectedItems.length ) {
      this.unselected.emit(true);
      return;
    }

  }

  // method to get photos from albums selected
  loadPhotos() {
    // checking which albums are selected
    const selectedItems = this.albums.filter( v => {
      return v.selected === true;
    });

    let query = '';

    // making the query string
    selectedItems.forEach((v, i) => {
      query += i < selectedItems.length - 1 ?  `albumId=${v.id}&` : `albumId=${v.id}`;
    });

    // getting photos or cleaning the photos container
    if (query) {
      this.usersService.getPhotos(query);
    } else {
      this.usersService.getPhotos('albumId=');
    }
  }

  // getting amount of photos from each album
  getPhotosLength(albums) {
    let query = '';

    albums.forEach((v, i) => {
      query += i < albums.length - 1 ?  `albumId=${v.id}&` : `albumId=${v.id}`;
    });

    this.usersService.getPhotosLength(query)
    .subscribe(
      res => {
        this.albums.forEach((v, i) => {
          this.albums[i].imagesLength = res.filter( elm => {
            return elm.albumId === this.albums[i].id;
          });
        });
      },
      err => {
        this.usersService.errorMessage(null);
      }
    );
  }

  // cleanig and closing add album form after save or cancel
  clearAndClose() {
    this.showAddAlbum = false;
    this.albumAdded.emit();
    this.addAlbumForm.reset();
  }

  // adding a new album
  onSubmit(form) {

    const obj = {
      id: 0,
      userId: this.userId,
      title: form.name,
      imagesLength: 0
    };

    this.albums.push(obj);
    this.clearAndClose();
  }

}
