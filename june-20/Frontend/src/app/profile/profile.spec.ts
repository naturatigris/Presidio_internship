import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from './profile';
import { UserService } from '../service/user.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../models/userprofilemodel';
import { UpdateUserDto } from '../models/userupdatemodel';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;
  let mockUserService: jasmine.SpyObj<UserService>;

  const mockUser: UserProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'User',
    bio: 'Developer',
    location: 'Earth',
    website: 'https://example.com',
    posts: [{ id: '1' }] as any,
    comments: [{ id: '2' }] as any,
    profileImage: null,
    isSuspended: false,
    suspensionReason: null,
    suspendedUntil: null,
    passwordHash: '',
    createdAt: new Date(),
    isDeleted: false,
    status: '',
    commentLikes: [],
    postLikes: []
  };

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['user$', 'updateUserSection', 'GetUserByEmail']);
    mockUserService.user$ = of(mockUser);

    await TestBed.configureTestingModule({
      imports: [Profile, HttpClientTestingModule],
      providers: [
        { provide: UserService, useValue: mockUserService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => null } } // no email param = own profile
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load user data and compute profile percentage', () => {
    expect(component.user?.email).toBe('john@example.com');
    expect(component.getProfileCompletionPercentage()).toBeGreaterThan(0);
    expect(component.activityData).toEqual([1, 1]);
  });

  it('should update bio successfully', () => {
    const spy = mockUserService.updateUserSection.and.returnValue(of({}));
    component.updateBio('New bio');
    expect(spy).toHaveBeenCalledWith('john@example.com', jasmine.any(UpdateUserDto));
  });

  it('should update location successfully', () => {
    const spy = mockUserService.updateUserSection.and.returnValue(of({}));
    component.updateLocation('New York');
    expect(spy).toHaveBeenCalledWith('john@example.com', jasmine.any(UpdateUserDto));
  });

});
