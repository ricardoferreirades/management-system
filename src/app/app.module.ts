import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardTitle,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatIcon,
  MatDivider,
  MatList,
  MatListItem,
  MatRippleModule,
  MatGridList,
  MatGridTile,
  MatFormField,
  MatInput} from '@angular/material';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ImagesComponent } from './components/images/images.component';
import { SearchUserPipe } from './pipes/search-user.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortingUserPipe } from './pipes/sorting-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatCard,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatIcon,
    MatDivider,
    MatList,
    MatListItem,
    UserListComponent,
    UserItemComponent,
    UsersComponent,
    AlbumsComponent,
    ImagesComponent,
    MatGridList,
    MatGridTile,
    MatFormField,
    MatInput,
    SearchUserPipe,
    SortingUserPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    NgxPaginationModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
