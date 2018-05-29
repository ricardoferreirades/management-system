import { UsersService } from './../../services/users.service';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnChanges {
  @Output() imagesLoad: EventEmitter<any> = new EventEmitter();
  @Input() order: String = 'cresc';
  @Input() page: Number = 1;
  @Input() itemsPerPage: Number;
  images: any[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  // method called when component is ready
  ngOnInit() {
    // method that update the photos array
    this.usersService.photos
    .subscribe(
      res => {
        this.images = res;

        this.imagesLoad.emit({
          imagesLength: res.length
        });

        this.setOrder();
      }
    );
  }

  // binding changes and applying them
  ngOnChanges() {
    this.setOrder();
  }

  // setting ordr of images sorting
  setOrder () {
    if (this.order === 'cresc') {
      this.orderImagesCresc();
    } else {
      this.orderImagesDecres();
    }
  }

  // setting order from lowest to highest
  orderImagesCresc() {
    this.images =  this.images.sort((a, b) => {
      const atitle = a.title;
      const btitle = b.title;

      if ( atitle > btitle ) {
        return 1;
      }

      if ( atitle < btitle ) {
        return -1;
      }

      return 0;
    });
  }

  // setting order from highest to lowest
  orderImagesDecres() {
    this.images =  this.images.sort((a, b) => {
      const atitle = a.title;
      const btitle = b.title;

      if ( atitle < btitle ) {
        return 1;
      }

      if ( atitle > btitle ) {
        return -1;
      }


      return 0;
    });
  }

}
