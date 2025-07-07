import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Admindashboard } from './admindashboard';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { CommentService } from '../service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Admindashboard', () => {
  let component: Admindashboard;
  let fixture: ComponentFixture<Admindashboard>;

  const mockUsers = [
    { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', createdAt: new Date() }
  ];

  const mockUserService = {
getFilteredUsers: jasmine.createSpy().and.returnValue(of({
    items: mockUsers,
    totalItems: 1
  })),
  getAllUsers: jasmine.createSpy().and.returnValue(of(mockUsers)),  // ✅ ADD THIS
  DeleteUser: jasmine.createSpy().and.returnValue(of({})),
  GetUserByEmail: jasmine.createSpy()  };

const mockPostService = {
  getAllPosts: jasmine.createSpy().and.returnValue(of([{}, {}, {}])),
  getFilteredPosts: jasmine.createSpy().and.returnValue(of({ items: [], totalItems: 0 })), // ✅ Added
  DeletePost: jasmine.createSpy().and.returnValue(of({}))
};

  const mockCommentService = {
    getFilteredComments: jasmine.createSpy().and.returnValue(of({ totalCount: 5 }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule,Admindashboard,HttpClientTestingModule],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: PostService, useValue: mockPostService },
        { provide: CommentService, useValue: mockCommentService },{ 
    provide: ActivatedRoute, 
    useValue: {
      // Provide mock params, queryParams, etc. if your component uses them
      params: of({}),
      queryParams: of({}),
      snapshot: {
        paramMap: {
          get: () => null
        }
      }
    }
  },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Admindashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(mockUserService.getFilteredUsers).toHaveBeenCalled();
    expect(component.users.length).toBe(1);
    expect(component.totalUsers).toBe(1);
  });

  it('should load total posts and comments on init', () => {
    expect(component.totalPosts).toBe(3);
    expect(component.totalComments).toBe(5);
  });

  it('should apply filters and reload users', () => {
    component.filters.role = 'Admin';
    component.applyFilters();
    expect(component.pageNumber).toBe(1);
    expect(mockUserService.getFilteredUsers).toHaveBeenCalledWith('Admin', '', 'asc', 1, 10);
  });


  it('should delete user and reload users', () => {
    component.userToDelete = mockUsers[0];
    component.confirmDeleteUser();
    expect(mockUserService.DeleteUser).toHaveBeenCalledWith('john@example.com');
  });
});
