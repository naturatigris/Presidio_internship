import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreatePost } from '../models/postcreatmodel';
import { PostQueryParams } from '../models/postquerymodel';
import { PostUpdate } from '../models/postupdatedto';
import { PaginatedResponse } from '../models/paginatepostresutl';
import { Post } from '../models/postmodel';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:5147/api/v1/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create a post (WritePost)', () => {
    const mockPost: CreatePost = {
      userEmail: 'user@example.com',
      title: 'Test Title',
      slug: 'test-title',
      content: 'Test Content',
      status: 'Draft',
      categoryNames: ['Tech', 'Angular'],
      images: [new File([''], 'image.jpg')]
    };

    service.WritePost(mockPost).subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body instanceof FormData).toBeTrue();
    req.flush({ message: 'Created' });
  });

  it('should get a post by ID', () => {
    const id = '123';
    const mockResponse = { id, title: 'Post' };

    service.GetPostById(id).subscribe(res => {
      expect(res.id).toBe('123');
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get all posts', () => {
    const mockPosts = [{ id: '1', title: 'First' }, { id: '2', title: 'Second' }];

    service.getAllPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('should delete a post by ID', () => {
    const id = '123';

    service.DeletePost(id).subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ message: 'Deleted' });
  });

  it('should get filtered posts', () => {
    const queryParams: PostQueryParams = {
      categories: ['Tech'],
      sortOrder: 'desc'
    };

    const mockResponse: PaginatedResponse<Post> = {
      items: [{ id: '1', title: 'Filtered Post', slug: '', userEmail: '', content: '' }],
      totalPages: 1,
      totalItems:1,
      currentPage:1,
      pageSize:1
    };

    service.getFilteredPosts(queryParams).subscribe(res => {
      expect(res.items.length).toBe(1);
    });

    const req = httpMock.expectOne(req =>
      req.url.includes(`${baseUrl}/filter`) && req.params.has('categories') && req.params.getAll('categories')!.includes('Tech')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should update a post', () => {
    const id = '123';
    const updatePost: PostUpdate = {
      title: 'Updated Title',
      slug: 'updated-title',
      content: 'Updated content',
      status: 'Published',
      deleteImages: true,
      views: 100,
      images: [new File([''], 'new.jpg')]
    };

    service.updatePost(id, updatePost).subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body instanceof FormData).toBeTrue();
    req.flush({ message: 'Updated' });
  });
});
