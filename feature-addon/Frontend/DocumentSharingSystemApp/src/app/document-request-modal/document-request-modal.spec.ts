import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentRequestModal } from './document-request-modal';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; // <-- Add this
import { DocumentRestoreService } from '../services/documentrestore.service';


describe('DocumentRequestModal', () => {
  let component: DocumentRequestModal;
  let fixture: ComponentFixture<DocumentRequestModal>;
    let mockRestoreService: jasmine.SpyObj<DocumentRestoreService>;


  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const mockDialogData = {
    action: 'Add',
    onAccept: jasmine.createSpy('onAccept')
  };

  beforeEach(async () => {
    mockRestoreService = jasmine.createSpyObj('DocumentRestoreService', [
      'getFilteredRequests',
      'approveRequest',
      'rejectRequest'
    ]);
    await TestBed.configureTestingModule({
      imports: [
        DocumentRequestModal,         
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,             
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
                { provide: DocumentRestoreService, useValue: mockRestoreService },

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentRequestModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize formControl as null for "Add" action', () => {
    expect(component.formControl.value).toBeNull();
  });

  it('should trigger onAccept and close dialog on upload click', () => {
    component.formControl.setValue('Test Value');
    component.onUploadClick();

    expect(mockDialogData.onAccept).toHaveBeenCalledWith('Test Value');
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should close dialog on cancel', () => {
    component.onCancelClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
