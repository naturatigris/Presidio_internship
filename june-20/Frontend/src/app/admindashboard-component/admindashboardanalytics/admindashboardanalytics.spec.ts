import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Admindashboardanalytics } from './admindashboardanalytics';
import { UserService } from '../../service/user.service';
import { PostService } from '../../service/post.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';

// Dummy canvas wrapper for testing
@Component({
  selector: 'canvas-mock',
  template: `<canvas id="postBlogChart"></canvas>`
})
class CanvasMock {}

describe('Admindashboardanalytics', () => {
  let component: Admindashboardanalytics;
  let fixture: ComponentFixture<Admindashboardanalytics>;

  const mockPosts = [
    { createdAt: new Date().toISOString() }
  ];

  const mockUsers = [
    { createdAt: new Date().toISOString() }
  ];

  const mockUserService = {
    getAllUsers: jasmine.createSpy().and.returnValue(of(mockUsers))
  };

  const mockPostService = {
    getAllPosts: jasmine.createSpy().and.returnValue(of(mockPosts))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admindashboardanalytics, CanvasMock],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: PostService, useValue: mockPostService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Admindashboardanalytics);
    component = fixture.componentInstance;

    // mock canvas element for chart.js
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'postBlogChart');
    document.body.appendChild(canvas);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users and posts on init', () => {
    expect(mockUserService.getAllUsers).toHaveBeenCalled();
    expect(mockPostService.getAllPosts).toHaveBeenCalled();
    expect(component.users?.length).toBe(1);
    expect(component.posts?.length).toBe(1);
  });

  

  it('should render chart after data is loaded', () => {
    spyOn<any>(component, 'renderChart');
    component.tryRenderChart();
    expect((component as any).renderChart).toHaveBeenCalled();
  });

  afterEach(() => {
    const canvas = document.getElementById('postBlogChart');
    if (canvas) canvas.remove();
    TestBed.resetTestingModule();
  });
});
