import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileHeaderEdit } from './profile-header-edit';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AuthTokenService} from '../../misc/jwtdecode'; // import the entire module
class MockAuthTokenService {
  getUserRole(): string | null {
    return 'User'; // default mock
  }
}


describe('ProfileHeaderEdit Component', () => {

  let component: ProfileHeaderEdit;
  let fixture: ComponentFixture<ProfileHeaderEdit>;
  let mockAuthService: MockAuthTokenService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,ProfileHeaderEdit],
        providers: [        { provide: AuthTokenService, useClass: MockAuthTokenService }
],     // ✅ service goes here

    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderEdit);
    component = fixture.componentInstance;
mockAuthService = TestBed.inject(AuthTokenService) as MockAuthTokenService;

    
  });


  it('should mark form invalid if required fields are empty', () => {
    spyOn(mockAuthService, 'getUserRole').and.returnValue('Admin');

    component.name = '';
    component.role = '';
    component.showDetailsModal = true;
    component.ngOnChanges({ name: {} as any, role: {} as any, showDetailsModal: {} as any });

    component.profileForm.get('role')?.markAsTouched();

    expect(component.profileForm.valid).toBeFalse();
  });

  it('should emit save event with form values when submitted and valid', () => {
    spyOn(mockAuthService, 'getUserRole').and.returnValue('User');
    spyOn(component.save, 'emit');

    component.name = 'Alice';
    component.role = 'User';
    component.showDetailsModal = true;
    component.ngOnChanges({ name: {} as any, role: {} as any, showDetailsModal: {} as any });

    component.profileForm.patchValue({ name: 'Alice', role: 'User' });

    component.onSubmit();

    expect(component.save.emit).toHaveBeenCalledWith({
      name: 'Alice',
      role: 'User'
    });
  });

  it('should emit close event on cancel', () => {
    spyOn(component.close, 'emit');
    component.onCancel();
    expect(component.close.emit).toHaveBeenCalled();
  });
});
