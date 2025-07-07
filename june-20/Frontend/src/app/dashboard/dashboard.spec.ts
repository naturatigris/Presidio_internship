import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PostService } from '../service/post.service';
import { CategoryService } from '../service/category.service';
import { PostLikeService } from '../service/postlike.service';
import { PaginatedResponse } from '../models/paginatepostresutl';
import { Post } from '../models/postmodel';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let postServiceSpy: jasmine.SpyObj<PostService>;
  let categoryServiceSpy: jasmine.SpyObj<CategoryService>;
  let postLikeServiceSpy: jasmine.SpyObj<PostLikeService>;

  beforeEach(async () => {
    postServiceSpy = jasmine.createSpyObj('PostService', ['getFilteredPosts']);
    categoryServiceSpy = jasmine.createSpyObj('CategoryService', ['getAllCategoryNames']);
    postLikeServiceSpy = jasmine.createSpyObj('PostLikeService', ['getLikesByUser', 'getLikeCount', 'likePost', 'unlikePost']);

    await TestBed.configureTestingModule({
      imports: [Dashboard, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: PostService, useValue: postServiceSpy },
        { provide: CategoryService, useValue: categoryServiceSpy },
        { provide: PostLikeService, useValue: postLikeServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories on init', () => {
    categoryServiceSpy.getAllCategoryNames.and.returnValue(of(['Angular', 'Node']));
    postServiceSpy.getFilteredPosts.and.returnValue(of({ items: [], totalPages: 1, totalItems: 0, currentPage: 1 ,pageSize:5} as PaginatedResponse<Post>));
    postLikeServiceSpy.getLikesByUser.and.returnValue(of([]));

    component.ngOnInit();

    expect(categoryServiceSpy.getAllCategoryNames).toHaveBeenCalled();
  });

  it('should apply filters and fetch posts', () => {
    const mockResponse:PaginatedResponse<Post> = {
      items: [{
        id: '1', title: 'Test Post', content: '', slug: '', categories: [], images: [],
        userEmail: ''
      }],
      totalPages: 1,
      totalItems: 1,
      currentPage: 1,
      pageSize:5
    };

    postServiceSpy.getFilteredPosts.and.returnValue(of(mockResponse  ));
    postLikeServiceSpy.getLikesByUser.and.returnValue(of([]));
    postLikeServiceSpy.getLikeCount.and.returnValue(of(5));

    component.applyFilters();

    expect(postServiceSpy.getFilteredPosts).toHaveBeenCalled();
    expect(component.posts.length).toBe(1);
  });

  it('should navigate to post detail when viewPost is called', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.viewPost('123');
    expect(navigateSpy).toHaveBeenCalledWith(['dashboard/post', '123']);
  });
});
