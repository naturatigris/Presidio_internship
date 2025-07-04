import { TestBed } from '@angular/core/testing';
import { PostLikeService } from './postlike.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostLike } from '../models/postlikemodel';

describe('PostLikeService', () => {
  let service: PostLikeService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:5147/api/v1/postlike';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostLikeService]
    });
    service = TestBed.inject(PostLikeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should like a post', () => {
    service.likePost('p123', 'john@example.com').subscribe(response => {
      expect(response).toBe('Liked');
    });

    const req = httpMock.expectOne(r =>
      r.method === 'POST' &&
      r.url === `${baseUrl}/like` &&
      r.params.get('postId') === 'p123' &&
      r.params.get('userEmail') === 'john@example.com'
    );

    expect(req.request.body).toBeNull();
    req.flush('Liked');
  });

  it('should unlike a post', () => {
    service.unlikePost('p123', 'john@example.com').subscribe(response => {
      expect(response).toBe('Unliked');
    });

    const req = httpMock.expectOne(r =>
      r.method === 'POST' &&
      r.url === `${baseUrl}/unlike` &&
      r.params.get('postId') === 'p123' &&
      r.params.get('userEmail') === 'john@example.com'
    );

    expect(req.request.body).toBeNull();
    req.flush('Unliked');
  });

  it('should get like count', () => {
    service.getLikeCount('p123').subscribe(count => {
      expect(count).toBe(5);
    });

    const req = httpMock.expectOne(r =>
      r.method === 'GET' &&
      r.url === `${baseUrl}/count` &&
      r.params.get('postId') === 'p123'
    );

    req.flush(5);
  });

  it('should get likes by post', () => {
    const mockLikes: PostLike[] = [
      { postId: 'p123', userEmail: 'john@example.com' }
    ];

    service.getLikesByPost('p123').subscribe(likes => {
      expect(likes.length).toBe(1);
      expect(likes[0].userEmail).toBe('john@example.com');
    });

    const req = httpMock.expectOne(r =>
      r.method === 'GET' &&
      r.url === `${baseUrl}/by-post` &&
      r.params.get('postId') === 'p123'
    );

    req.flush(mockLikes);
  });

  it('should get likes by user', () => {
    const mockLikes: PostLike[] = [
      { postId: 'p123', userEmail: 'john@example.com' }
    ];

    service.getLikesByUser('john@example.com').subscribe(likes => {
      expect(likes.length).toBe(1);
      expect(likes[0].postId).toBe('p123');
    });

    const req = httpMock.expectOne(r =>
      r.method === 'GET' &&
      r.url === `${baseUrl}/by-user` &&
      r.params.get('userEmail') === 'john@example.com'
    );

    req.flush(mockLikes);
  });
});
