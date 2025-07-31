import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Requestdetail } from './requestdetail';
import { of } from 'rxjs';
import { DocumentRestoreService } from '../services/documentrestore.service';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { UserModel } from '../models/user.model';
import { DocumentRequestModal } from '../document-request-modal/document-request-modal';
import { DocumentRestoreRequestModel } from '../models/document.request.model';

describe('Requestdetail', () => {
  let component: Requestdetail;
  let fixture: ComponentFixture<Requestdetail>;

  let mockDocumentRestoreService: jasmine.SpyObj<DocumentRestoreService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    // Create spies
    mockDocumentRestoreService = jasmine.createSpyObj('DocumentRestoreService', ['getRequestByDocumentId']);
    mockUserService = jasmine.createSpyObj('UserService', ['getCurrentUserDetails']);
    mockStore = jasmine.createSpyObj('Store', ['select']);

    // Return default observables
    mockStore.select.and.returnValue(of(new UserModel("1"))); 
    mockUserService.getCurrentUserDetails.and.returnValue(of(new UserModel("1")));
    mockDocumentRestoreService.getRequestByDocumentId.and.returnValue(of(new DocumentRestoreRequestModel()));

    await TestBed.configureTestingModule({
      imports: [Requestdetail],
      providers: [
        { provide: DocumentRestoreService, useValue: mockDocumentRestoreService },
        { provide: UserService, useValue: mockUserService },
        { provide: Store, useValue: mockStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Requestdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
