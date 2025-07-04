import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSignUp } from '../models/usersignup';
import { UserProfile } from '../models/userprofilemodel';
import { UpdateUserDto } from '../models/userupdatemodel';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:5147/api/v1/users';

  const mockUser: UserProfile = {
    email: 'john@example.com',
    name: 'John Doe',
    passwordHash: 'hashed',
    createdAt: new Date(),
    role: 'user',
    isSuspended: false,
    bio: '',
    suspensionReason: null,
    suspendedUntil: null,
    isDeleted: false,
    status: 'active',
    profileImage: null,
    location: null,
    website: null,
    posts: [],
    comments: [],
    commentLikes: [],
    postLikes: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should register user', () => {
    const signupData: UserSignUp = {
      Name: 'John',
      Email: 'john@example.com',
      Password: 'pass123',
      Role:'User',
      AdminSecret:null
    };

    service.register(signupData).subscribe(res => {
      expect(res).toEqual({ message: 'User registered' });
    });

    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(signupData);
    req.flush({ message: 'User registered' });
  });

  it('should fetch user by email', () => {
    service.GetUserByEmail('john@example.com').subscribe(user => {
      expect(user.email).toBe('john@example.com');
    });

    const req = httpMock.expectOne(`${baseUrl}/get/john@example.com`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should delete a user', () => {
    service.DeleteUser('john@example.com').subscribe(res => {
      expect(res).toEqual({ success: true });
    });

    const req = httpMock.expectOne(`${baseUrl}/delete/john@example.com`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ success: true });
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].email).toBe('john@example.com');
    });

    const req = httpMock.expectOne(`${baseUrl}/getall`);
    expect(req.request.method).toBe('GET');
    req.flush([mockUser]);
  });

  it('should get filtered users', () => {
    service.getFilteredUsers('user', 'active', 'asc', 1, 10).subscribe(res => {
      expect(res.items.length).toBe(1);
      expect(res.totalItems).toBe(1);
    });

    const req = httpMock.expectOne(`${baseUrl}/getall/filtered?sortOrder=asc&pageNumber=1&pageSize=10&role=user&status=active`);
    expect(req.request.method).toBe('GET');
    req.flush({ items: [mockUser], totalItems: 1, pageNumber: 1, pageSize: 10 });
  });

  it('should update user section', () => {
    const updateDto: UpdateUserDto = { name: 'Updated' };
    const formDataSpy = spyOn(service as any, 'convertToFormData').and.callThrough();

    service.updateUserSection('john@example.com', updateDto).subscribe(res => {
      expect(res).toEqual({ updated: true });
      expect(formDataSpy).toHaveBeenCalledWith(updateDto, undefined);
    });

    const req = httpMock.expectOne(`${baseUrl}/john@example.com`);
    expect(req.request.method).toBe('PUT');
    req.flush({ updated: true });
  });
});
