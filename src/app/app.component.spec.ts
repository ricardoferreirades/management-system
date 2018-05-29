import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { ImagesComponent } from './components/images/images.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
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
  MatGridList,
  MatGridTile,
  MatFormField,
  MatInput,
  MatButtonModule,
  MatCheckboxModule,
  MatRippleModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        SearchUserPipe
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRippleModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
