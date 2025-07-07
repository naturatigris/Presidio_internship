import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adminpostview } from './adminpostview';
import { PostService } from '../../service/post.service';
import { CategoryService } from '../../service/category.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/postmodel';

// Mock data
const mockPosts:Post[] = [
  {
    id: '1', title: 'Test Post', views: 10, comments: [], images: [{
      content: undefined,
      postId: '',
      name: ''
    }],
    userEmail: '',
    slug: '',
    content: ''
  },
  {
    id: '2', title: 'Another Post', views: 5, comments: [],
    userEmail: '',
    slug: '',
    content: ''
  }
];

const mockCategories = ['Tech', 'Design'];

// Mock Services
const mockPostService = {
  getFilteredPosts: jasmine.createSpy().and.returnValue(of({
    items: mockPosts,
    totalPages: 1,
    totalItems: 2,
    currentPage: 1
  })),
  DeletePost: jasmine.createSpy().and.returnValue(of({}))
};

const mockCategoryService = {
  getAllCategoryNames: jasmine.createSpy().and.returnValue(of(mockCategories))
};

describe('Adminpostview', () => {
  let component: Adminpostview;
  let fixture: ComponentFixture<Adminpostview>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, RouterTestingModule,Adminpostview],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: CategoryService, useValue: mockCategoryService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Adminpostview);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories on init', () => {
    expect(mockCategoryService.getAllCategoryNames).toHaveBeenCalled();
    expect(component.fetchedCategories).toEqual(mockCategories);
  });

  it('should fetch posts on init', () => {
    expect(mockPostService.getFilteredPosts).toHaveBeenCalled();
    expect(component.posts.length).toBe(2);
    expect(component.totalItems).toBe(2);
  });

  it('should navigate to post view', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.viewPost('1');
    expect(navigateSpy).toHaveBeenCalledWith(['dashboard/post', '1']);
  });

  it('should delete a post', () => {
    spyOn(window, 'confirm').and.returnValue(true); // Simulate confirm
    component.posts = [...mockPosts];
    component.DeletePost('1');
    expect(mockPostService.DeletePost).toHaveBeenCalledWith('1');
  });
});
