import { HttpClientModule } from '@angular/common/http';
import { User } from './../shared/user';
import { TestBed, inject, async } from '@angular/core/testing';

import { UsersService } from './users.service';


describe('UsersService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [UsersService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    usersService = new UsersService(<any> httpClientSpy);
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
