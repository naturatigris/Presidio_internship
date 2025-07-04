import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentCreateDto } from '../models/commentcreatedto';
import { CommentQueryParams } from '../models/commentqueryparams';
import { UpdateCommentDto } from '../models/updatecommentdto';
import { Comment } from '../models/commentmodel';
import { UserProfile } from '../models/userprofilemodel';
import { CommentLike } from '../models/commentlikemodal';
import { Post } from '../models/postmodel';

describe('CommentService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;

  const apiUrl = 'http://localhost:5147/api/v1/comments';

  const mockUser: UserProfile = {
    email: 'john@example.com',
    name: 'John Doe',
    passwordHash: 'hashedpassword',
    createdAt: new Date(),
    role: 'user',
    isSuspended: false,
    bio: 'Experienced developer',
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

  const mockPost: Post = {
    id: 'post1',
    userEmail: 'author@example.com',
    title: 'Test Post Title',
    slug: 'test-post-title',
    content: 'This is a test post.'
  };

  const mockCommentLike: CommentLike = {
    commentId: 'c1',
    userEmail: 'john@example.com'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });

    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a comment', () => {
    const dto: CommentCreateDto = {
      postId: '123',
      content: 'Test comment',
      userEmail: 'john@example.com'
    };

    const mockResponse: Comment = {
      id: 'c1',
      postId: '123',
      content: 'Test comment',
      userEmail: 'john@example.com',
      createdAt: new Date().toISOString(),
      status: 'active',
      iseditied: false,
      post: mockPost,
      user: mockUser,
      likes: mockCommentLike
    };

    service.addComment(dto).subscribe(comment => {
      expect(comment).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });

  it('should fetch filtered comments', () => {
    const queryParams: CommentQueryParams = {
      postId: '123',
      userEmail: 'john@example.com',
      sortOrder: 'asc'
    };

    const mockResponse = {
      items: [
        {
          id: 'c1',
          postId: '123',
          content: 'Test 1',
          userEmail: 'john@example.com',
          createdAt: new Date().toISOString(),
          status: 'active',
          iseditied: false,
          post: mockPost,
          user: mockUser,
          likes: mockCommentLike
        }
      ],
      totalCount: 1
    };

    service.getFilteredComments(queryParams).subscribe(res => {
      expect(res.items.length).toBe(1);
      expect(res.totalCount).toBe(1);
    });

    const req = httpMock.expectOne(req =>
      req.url === `${apiUrl}/filter` &&
      req.params.get('postId') === '123' &&
      req.params.get('userEmail') === 'john@example.com' &&
      req.params.get('sortOrder') === 'asc'
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should update a comment', () => {
    const updateDto: UpdateCommentDto = {
      content: 'Updated comment'
    };

    const id = 'c1';

    service.updateComment(id, updateDto).subscribe(response => {
      expect(response).toEqual({});
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updateDto);
    req.flush({});
  });

  it('should delete a comment', () => {
    const id = 'c1';

    service.deletecomment(id).subscribe(response => {
      expect(response).toEqual({});
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
