import { TestBed } from '@angular/core/testing';
import { CommentLikeService } from './commentlike.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentLike } from '../models/commentlikemodal';

describe('CommentLikeService', () => {
  let service: CommentLikeService;
  let httpMock: HttpTestingController;

  const baseUrl = 'http://localhost:5147/api/v1/commentlike';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentLikeService]
    });
    service = TestBed.inject(CommentLikeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should like a comment', () => {
    const commentId = '123';
    const userEmail = 'test@example.com';
    const expectedResponse = 'Liked';

    service.likeComment(commentId, userEmail).subscribe(response => {
      expect(response).toBe(expectedResponse);
    });

    const req = httpMock.expectOne(
      `${baseUrl}/like?commentId=${commentId}&userEmail=${userEmail}`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBeNull();
    req.flush(expectedResponse);
  });

  it('should unlike a comment', () => {
    const commentId = '123';
    const userEmail = 'test@example.com';
    const expectedResponse = 'Unliked';

    service.unlikeComment(commentId, userEmail).subscribe(response => {
      expect(response).toBe(expectedResponse);
    });

    const req = httpMock.expectOne(
      `${baseUrl}/unlike?commentId=${commentId}&userEmail=${userEmail}`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBeNull();
    req.flush(expectedResponse);
  });

  it('should get like count', () => {
    const commentId = '123';
    const expectedCount = 5;

    service.getLikeCount(commentId).subscribe(count => {
      expect(count).toBe(expectedCount);
    });

    const req = httpMock.expectOne(`${baseUrl}/count?commentId=${commentId}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedCount);
  });

  it('should get likes by comment', () => {
    const commentId = '123';
    const expectedLikes: CommentLike[] = [
      { commentId: '123', userEmail: 'user1@example.com' },
      { commentId: '123', userEmail: 'user2@example.com' }
    ];

    service.getLikesByComment(commentId).subscribe(likes => {
      expect(likes.length).toBe(2);
      expect(likes).toEqual(expectedLikes);
    });

    const req = httpMock.expectOne(`${baseUrl}/by-comment?commentId=${commentId}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedLikes);
  });

  it('should get likes by user', () => {
    const userEmail = 'user1@example.com';
    const expectedLikes: CommentLike[] = [
      { commentId: 'c1', userEmail },
      { commentId: 'c2', userEmail }
    ];

    service.getLikesByUser(userEmail).subscribe(likes => {
      expect(likes.length).toBe(2);
      expect(likes).toEqual(expectedLikes);
    });

    const req = httpMock.expectOne(`${baseUrl}/by-user?userEmail=${userEmail}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedLikes);
  });
});
