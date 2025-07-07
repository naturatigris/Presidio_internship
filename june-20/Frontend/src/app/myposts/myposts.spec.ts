import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Myposts } from './myposts';
import { PostService } from '../service/post.service';
import { PostLikeService } from '../service/postlike.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// Mock Services
const mockPostService = {
  getFilteredPosts: jasmine.createSpy().and.returnValue(of({
    items: [],
    totalPages: 1,
    totalItems: 0,
    currentPage: 1
  })),
  DeletePost: jasmine.createSpy().and.returnValue(of({}))
};

const mockPostLikeService = {
  getLikesByUser: jasmine.createSpy().and.returnValue(of([])),
  getLikeCount: jasmine.createSpy().and.returnValue(of(0)),
  likePost: jasmine.createSpy().and.returnValue(of({})),
  unlikePost: jasmine.createSpy().and.returnValue(of({}))
};

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('Myposts', () => {
  let component: Myposts;
  let fixture: ComponentFixture<Myposts>;

  beforeEach(async () => {
       mockPostService.DeletePost.calls.reset();
  mockRouter.navigate.calls.reset();

    await TestBed.configureTestingModule({
      imports: [Myposts],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: PostLikeService, useValue: mockPostLikeService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Myposts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Myposts component', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate when viewPost is triggered', () => {
    component.viewPost('123');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['dashboard/post', '123']);
  });

  it('should call router.navigate when editPost is triggered', () => {
    component.editPost('456');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['myposts/edit', '456']);
  });

  it('should delete a post when DeletePost is called with confirmation', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.publishedposts = [{ id: '789', title: '', slug: '', content: '', categories: [], userEmail: '', status: 'Published' }];
    component.DeletePost('789');
    expect(mockPostService.DeletePost).toHaveBeenCalledWith('789');
  });

  it('should not delete a post when confirmation is cancelled', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.DeletePost('789');
    expect(mockPostService.DeletePost).not.toHaveBeenCalled();
  });
});
