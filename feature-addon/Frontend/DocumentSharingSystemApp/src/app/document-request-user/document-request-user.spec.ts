import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentRequestUser } from './document-request-user';
import { DocumentRestoreService } from '../services/documentrestore.service';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { DocumentRestoreRequestModel } from '../models/document.request.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Navbar } from '../navbar/navbar';
import { DocumentRequestModal } from '../document-request-modal/document-request-modal';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  template: ''
})
class FakeNavbar {}

describe('DocumentRequestUser', () => {
  let component: DocumentRequestUser;
  let fixture: ComponentFixture<DocumentRequestUser>;

  let mockRestoreService: jasmine.SpyObj<DocumentRestoreService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockStore: jasmine.SpyObj<Store>;

  const mockUser = new UserModel('1');
  const req:DocumentRestoreRequestModel={
    id: '1',
    documentId: '',
    document: null,
    originalFileName: '',
    requestedByUserId: '',
    requestedByUserName: '',
    requestedByUser: null,
    requestedAt: new Date,
    reason: '',
    status: '',
    reviewedAt: null,
    reviewedByUserId: null,
    reviewedByUserName: null,
    reviewedByUser: null,
    isAdminRead: false,
    IsUserRead: false
  };
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => null 
    }
  }
};

  beforeEach(async () => {
    mockRestoreService = jasmine.createSpyObj('DocumentRestoreService', ['getRequestByUserId']);
    mockUserService = jasmine.createSpyObj('UserService', ['getCurrentUserDetails']);
    mockStore = jasmine.createSpyObj('Store', ['select']);

    mockStore.select.and.returnValue(of(mockUser));
    mockUserService.getCurrentUserDetails.and.returnValue(of(mockUser));
    mockRestoreService.getRequestByUserId.and.returnValue(of(req));

    await TestBed.configureTestingModule({
      imports: [DocumentRequestUser, CommonModule, MatCardModule, Navbar],
      providers: [
        { provide: DocumentRestoreService, useValue: mockRestoreService },
        { provide: UserService, useValue: mockUserService },
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }

      ]
    }).compileComponents();
    TestBed.overrideComponent(DocumentRequestUser, {
            set: {
            imports: [
              FakeNavbar,CommonModule,
    MatCardModule]}})


    fixture = TestBed.createComponent(DocumentRequestUser);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Triggers ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load requests on init if current user is available from store', () => {
    expect(mockStore.select).toHaveBeenCalled();
    expect(mockRestoreService.getRequestByUserId).toHaveBeenCalledWith(mockUser);
  });

});
