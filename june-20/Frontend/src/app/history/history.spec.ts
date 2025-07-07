import { ComponentFixture, TestBed } from '@angular/core/testing';
import { History } from './history';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('History', () => {
  let component: History;
  let fixture: ComponentFixture<History>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [History,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(History);
    component = fixture.componentInstance;

    // Mock Data
    component.posts = [
      {
        id: '1',
        title: 'Post Title',
        slug: 'post-title',
        content: 'This is some post content that is longer than 100 characters. Lorem ipsum dolor sit amet.',
        status: 'Published',
        categories: [{ id:'1',name: 'Angular' }],
        comments: [{
          id: 'c1',
          postId: '',
          userEmail: '',
          content: '',
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
          name: 'Test User',
          email: '',
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
        }],
        userEmail: 'user@example.com',
        user: {
          name: 'Test User',
          email: '',
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
        }
      }
    ];

    component.comments = [
      {
        content: 'Nice post!',
        status: 'Approved',
        createdAt: '',
        post: {
          id: '1', title: 'Post Title',
          userEmail: '',
          slug: '',
          content: ''
        },
        user: {
          name: 'Commenter',
          email: '',
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
        id: 'c1',
        postId: '',
        userEmail: '',
        iseditied: false,
        likes: {
          commentId: '',
          userEmail: ''
        }
      }
    ];


    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should call viewpost when post title is clicked', () => {
    
    spyOn(component, 'viewpost');
    const postTitle = fixture.debugElement.query(By.css('.post-entry h3'));
    postTitle.nativeElement.click();
    expect(component.viewpost).toHaveBeenCalledWith('1');
  });

it('should call viewpost when comment post title is clicked', () => {
  // Arrange
  component.activeTab = 'Comments'; // important!

  fixture.detectChanges();
  spyOn(component, 'viewpost');

  const commentPostLink = fixture.debugElement.query(By.css('.comment-meta .highlight'));
  expect(commentPostLink).not.toBeNull(); // clear assertion

  commentPostLink?.nativeElement.click();
  expect(component.viewpost).toHaveBeenCalledWith('1');
});
});
