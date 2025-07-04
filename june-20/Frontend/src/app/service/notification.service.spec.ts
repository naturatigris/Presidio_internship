import { TestBed } from '@angular/core/testing';
import { NotificationService, UINotification } from './notification.service';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new posts to postsSubject', () => {
    const mockPost: Post = {
      id: 'post1',
      userEmail: 'user@example.com',
      title: 'Test Post',
      slug: 'test-post',
      content: 'Post content'
    };

    // Simulate receiving a post
    (service as any).postsSubject.next([{ item: mockPost, read: false }]);

    service.posts$.subscribe((notifications) => {
      expect(notifications.length).toBe(1);
      expect(notifications[0].item.title).toBe('Test Post');
    });
  });

  it('should mark post as read', () => {
    const mockPost: Post = {
      id: 'post1',
      userEmail: 'user@example.com',
      title: 'Test Post',
      slug: 'test-post',
      content: 'Post content'
    };

    (service as any).postsSubject.next([{ item: mockPost, read: false }]);
    service.markPostAsRead('post1');

    service.posts$.subscribe((notifications) => {
      expect(notifications[0].read).toBeTrue();
    });
  });

  it('should mark comment as read', () => {
    const mockComment: Comment = {
      id: 'comment1',
      postId: 'post1',
      content: 'Test comment',
      userEmail: 'commenter@example.com',
      createdAt: new Date().toISOString(),
      status: 'active',
      iseditied: false,
      post: {
        id: 'post1',
        userEmail: 'user@example.com',
        title: 'Post',
        slug: 'slug',
        content: 'Post content'
      },
      user: {
        email: 'commenter@example.com',
        name: 'John',
        passwordHash: '',
        createdAt: new Date(),
        role: 'user',
        isSuspended: false,
        bio: '',
        suspensionReason: null,
        suspendedUntil: null,
        isDeleted: false,
        status: '',
        profileImage: null,
        location: null,
        website: null,
        posts: [],
        comments: [],
        commentLikes: [],
        postLikes: []
      },
      likes: { commentId: 'comment1', userEmail: 'user@example.com' }
    };

    (service as any).commentsSubject.next([{ item: mockComment, read: false }]);
    service.markCommentAsRead('comment1');

    service.comments$.subscribe((notifications) => {
      expect(notifications[0].read).toBeTrue();
    });
  });

  it('should detect unread notifications', (done) => {
    const mockPost: Post = {
      id: 'post1',
      userEmail: 'user@example.com',
      title: 'Test Post',
      slug: 'test-post',
      content: 'Post content'
    };

    const mockComment: Comment = {
      id: 'comment1',
      postId: 'post1',
      content: 'Test comment',
      userEmail: 'commenter@example.com',
      createdAt: new Date().toISOString(),
      status: 'active',
      iseditied: false,
      post: {
        id: 'post1',
        userEmail: 'user@example.com',
        title: 'Post',
        slug: 'slug',
        content: 'Post content'
      },
      user: {
        email: 'commenter@example.com',
        name: 'John',
        passwordHash: '',
        createdAt: new Date(),
        role: 'user',
        isSuspended: false,
        bio: '',
        suspensionReason: null,
        suspendedUntil: null,
        isDeleted: false,
        status: '',
        profileImage: null,
        location: null,
        website: null,
        posts: [],
        comments: [],
        commentLikes: [],
        postLikes: []
      },
      likes: { commentId: 'comment1', userEmail: 'user@example.com' }
    };

    (service as any).postsSubject.next([{ item: mockPost, read: false }]);
    (service as any).commentsSubject.next([{ item: mockComment, read: true }]);

    service.hasUnread$.subscribe((hasUnread) => {
      expect(hasUnread).toBeTrue();
      done();
    });
  });
});
