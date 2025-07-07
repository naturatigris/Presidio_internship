import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adminpostcomponent } from './adminpostcomponent';
import { PostService } from '../../service/post.service';
import { CategoryService } from '../../service/category.service';
import { PostLikeService } from '../../service/postlike.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/postmodel';

describe('Adminpostcomponent', () => {
  let component: Adminpostcomponent;
  let fixture: ComponentFixture<Adminpostcomponent>;

  const mockPosts:Post[] = [
    {
      id: '1',
      title: 'Test Post',
      slug: 'test-post',
      content: 'This is a test post content',
      images: [],
      categories: [{
        name: 'Tech',
        id: ''
      }],
      user: {
        name: 'Admin', email: '', passwordHash: '',
        createdAt: new Date(),
        role: '',
        isSuspended: false,
        suspensionReason: null,
        suspendedUntil: null,
        isDeleted: false,
        status: '',
        profileImage: null,
        bio: null,
        location: null,
        website: null,
        posts: [],
        comments: [],
        commentLikes: [],
        postLikes: []
      },
      userEmail: 'admin@example.com',
      status: 'Published',
      createdAt: new Date()
    }
  ];

  const mockPostService = {
    getFilteredPosts: jasmine.createSpy().and.returnValue(of({
      items: mockPosts,
      totalPages: 1,
      totalItems: 1,
      currentPage: 1
    })),
    DeletePost: jasmine.createSpy().and.returnValue(of({}))
  };

  const mockCategoryService = {
    getAllCategoryNames: jasmine.createSpy().and.returnValue(of(['Tech', 'News']))
  };

  const mockPostLikeService = {
    getLikesByUser: jasmine.createSpy().and.returnValue(of([{ postId: '1' }])),
    getLikeCount: jasmine.createSpy().and.returnValue(of(5)),
    likePost: jasmine.createSpy().and.returnValue(of({})),
    unlikePost: jasmine.createSpy().and.returnValue(of({}))
  };

  const mockRouter = {
    navigate: jasmine.createSpy()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminpostcomponent, CommonModule, FormsModule],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: CategoryService, useValue: mockCategoryService },
        { provide: PostLikeService, useValue: mockPostLikeService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Adminpostcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load categories and posts on init', () => {
    expect(mockCategoryService.getAllCategoryNames).toHaveBeenCalled();
    expect(mockPostService.getFilteredPosts).toHaveBeenCalled();
    expect(component.posts.length).toBe(1);
    expect(component.fetchedCategories).toContain('Tech');
  });

  it('should apply filters and update post list', () => {
    component.filteredParams.searchTerm = 'test';
    component.applyFilters();
    expect(mockPostService.getFilteredPosts).toHaveBeenCalled();
    expect(component.posts[0].title).toBe('Test Post');
  });

  it('should delete a post', () => {
    spyOn(window, 'confirm').and.returnValue(true); // simulate user confirming delete
    component.posts = [...mockPosts];
    component.DeletePost('1');
    expect(mockPostService.DeletePost).toHaveBeenCalledWith('1');
    expect(component.posts.length).toBe(0);
  });

  
});
