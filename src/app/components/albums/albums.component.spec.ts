import { HttpModule } from '@angular/http';
import { UsersService } from './../../services/users.service';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatCheckbox, MatCheckboxModule, MatFormField, MatRipple } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        AlbumsComponent,
        MatCheckbox,
        MatFormField,
        MatRipple
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
