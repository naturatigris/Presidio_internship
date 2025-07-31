import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { DocumentRequestAdmin } from './document-request-admin';
import { DocumentRestoreService, rquestdocumentsresponse } from '../services/documentrestore.service';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentRestoreRequestModel } from '../models/document.request.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: ''
})
class FakeNavbar {}

describe('DocumentRequestAdmin', () => {
  let component: DocumentRequestAdmin;
  let fixture: ComponentFixture<DocumentRequestAdmin>;

  let mockRestoreService: jasmine.SpyObj<DocumentRestoreService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockStore: jasmine.SpyObj<Store>;
  const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => null 
    }
  }
};
let mockdata: rquestdocumentsresponse = {
  data: [new DocumentRestoreRequestModel('1')],
  totalRecords: 1
};



  beforeEach(async () => {
    mockRestoreService = jasmine.createSpyObj('DocumentRestoreService', [
      'getFilteredRequests',
      'approveRequest',
      'rejectRequest'
    ]);

    mockUserService = jasmine.createSpyObj('UserService', ['getCurrentUserDetails']);
    mockStore = jasmine.createSpyObj('Store', ['select']);

    mockStore.select.and.returnValue(of(new UserModel('1')));
    mockUserService.getCurrentUserDetails.and.returnValue(of(new UserModel('1')));
    mockRestoreService.getFilteredRequests.and.returnValue(of({data:[],totalRecords:0}));

    await TestBed.configureTestingModule({
      imports: [DocumentRequestAdmin],
      providers: [
        { provide: DocumentRestoreService, useValue: mockRestoreService },
        { provide: UserService, useValue: mockUserService },
        { provide: Store, useValue: mockStore },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }

      ]
    }).compileComponents();

        TestBed.overrideComponent(DocumentRequestAdmin, {
            set: {
            imports: [
              FakeNavbar,CommonModule,MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule]}})

    fixture = TestBed.createComponent(DocumentRequestAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call loadRequest and populate requests and totalRequests', fakeAsync(() => {
  const mockUser = new UserModel('1');
  component.currentUser = mockUser;

  mockRestoreService.getFilteredRequests.and.returnValue(of(mockdata));

  component.loadRequest('pending');
  tick();
  fixture.detectChanges();
 

  expect(component.totalRequests).toBe(1);
}));

it('should approve a request and reload requests', () => {
  const req = { id: 'doc123' } as any;
  component.currentUser = new UserModel('1');

  mockRestoreService.approveRequest.and.returnValue(of({}));
  spyOn(component, 'loadRequest');

  component.approveRequest(req);

  expect(mockRestoreService.approveRequest).toHaveBeenCalledWith(component.currentUser, req.id, component.currentUser.id);
  expect(component.loadRequest).toHaveBeenCalled();
});
it('should reject a request and reload requests', () => {
  const req = { id: 'doc123' } as any;
  component.currentUser = new UserModel('1');

  mockRestoreService.rejectRequest.and.returnValue(of({}));
  spyOn(component, 'loadRequest');

  component.rejectRequest(req);

  expect(mockRestoreService.rejectRequest).toHaveBeenCalledWith(component.currentUser, req.id, component.currentUser.id);
  expect(component.loadRequest).toHaveBeenCalled();
});


});
