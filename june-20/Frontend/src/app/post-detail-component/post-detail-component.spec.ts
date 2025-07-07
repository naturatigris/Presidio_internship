import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail-component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PostService } from '../service/post.service';
import { CommentService } from '../service/comment.service';
import { CommentLikeService } from '../service/commentlike.service';
import { Location } from '@angular/common';
import { fakeAsync, tick } from '@angular/core/testing';
import * as JwtUtils from '../misc/jwtdecode';
import { jwtDecode } from 'jwt-decode';



// Mock data
const mockPost = {
  id: '1',
  title: 'Test Post',
  content: 'Test Content',
  views: 5,
  images: [],
  categories: [],
  user: { name: 'User', email: 'user@example.com', bio: '', profileImage: '' }
};

const mockComment = {
  id: 'c1',
  content: 'Nice post!',
  userEmail: 'user@example.com',
  user: { name: 'User' },
  createdAt: new Date().toISOString(),
  iseditied: false
};

// Mock Services
const mockPostService = {
  GetPostById: jasmine.createSpy().and.returnValue(of(mockPost)),
  updatePost: jasmine.createSpy().and.returnValue(of({}))
};

const mockCommentService = {
  getFilteredComments: jasmine.createSpy().and.returnValue(of({ items: [mockComment] })),
  addComment: jasmine.createSpy().and.returnValue(of({})),
  updateComment: jasmine.createSpy().and.returnValue(of({})),
  deletecomment: jasmine.createSpy().and.returnValue(of({}))
};

const mockCommentLikeService = {
  getLikesByUser: jasmine.createSpy().and.returnValue(of([])),
  getLikeCount: jasmine.createSpy().and.returnValue(of(0)),
  likeComment: jasmine.createSpy('likeComment').and.returnValue(of({})), // 🔍 add name here
  unlikeComment: jasmine.createSpy('unlikeComment').and.returnValue(of({}))
  
};

describe('PostDetailComponent', () => {

  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async () => {
    localStorage.setItem('email', 'user@example.com');
          

    await TestBed.configureTestingModule({
      imports: [PostDetailComponent],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: CommentService, useValue: mockCommentService },
        { provide: CommentLikeService, useValue: mockCommentLikeService },
        { provide: Location, useValue: { back: jasmine.createSpy('back') } },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load post and increment view on init', () => {
    expect(mockPostService.GetPostById).toHaveBeenCalledWith('1');
    expect(mockPostService.updatePost).toHaveBeenCalledWith('1', jasmine.objectContaining({
      views: 6
    }));
  });

  it('should load comments on init', () => {
    expect(mockCommentService.getFilteredComments).toHaveBeenCalled();
    expect(component.userComments.length + component.otherComments.length).toBeGreaterThan(0);
  });

 

  it('should update and save a comment', () => {
    component.editContent = 'Edited comment';
    component.saveComment('c1');
    expect(mockCommentService.updateComment).toHaveBeenCalledWith('c1', jasmine.objectContaining({
      content: 'Edited comment'
    }));
  });

  it('should delete comment with confirmation', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.post = { id: '1' } as any;
    component.deleteComment('c1');
    expect(mockCommentService.deletecomment).toHaveBeenCalledWith('c1');
  });
});
