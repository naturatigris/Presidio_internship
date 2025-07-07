import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notifications } from './notifications';
import { NotificationService, UINotification } from '../service/notification.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Notifications Component', () => {
  let component: Notifications;
  let fixture: ComponentFixture<Notifications>;
  let mockNotificationService: jasmine.SpyObj<NotificationService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockPosts: UINotification<Post>[] = [
    {
      read: false,
      item: {
        id: '1', title: 'Post One', userEmail: 'user@example.com',
        slug: '',
        content: ''
      }
    }
  ];

  const mockComments: UINotification<Comment>[] = [
    {
      read: false,
      item: {
        postId: '1', content: 'Great post!', userEmail: 'commenter@example.com',
        id: '',
        status: '',
        createdAt: '',
        iseditied: false,
        post: {
          userEmail: '',
          title: '',
          slug: '',
          content: ''
        },
        user: {
          email: '',
          name: '',
          passwordHash: '',
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
        likes: {
          commentId: '',
          userEmail: ''
        }
      }
    }
  ];

  beforeEach(async () => {
    mockNotificationService = jasmine.createSpyObj('NotificationService', [
      'markPostAsRead',
      'markCommentAsRead'
    ], {
      posts$: of(mockPosts),
      comments$: of(mockComments)
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [Notifications,HttpClientTestingModule],
      providers: [
        { provide: NotificationService, useValue: mockNotificationService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Notifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load unread posts and comments on init', () => {
    expect(component.unreadPosts.length).toBe(1);
    expect(component.unreadComments.length).toBe(1);
  });

 
});
