import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CreatePost } from './create-post';
import { PostService } from '../service/post.service';
import { CategoryService } from '../service/category.service';
import { CommonModule } from '@angular/common';

// Mock Services
const mockPostService = {
  WritePost: jasmine.createSpy('WritePost').and.returnValue(of({}))
};

const mockCategoryService = {
  getAllCategoryNames: jasmine.createSpy('getAllCategoryNames').and.returnValue(of(['tech', 'life']))
};

describe('CreatePost', () => {
  let component: CreatePost;
  let fixture: ComponentFixture<CreatePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, CommonModule,CreatePost],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: CategoryService, useValue: mockCategoryService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form as invalid', () => {
    expect(component.postForm.valid).toBeFalse();
  });

  it('should add and remove category', () => {
    component.addCategory('tech');
    expect(component.categoryNames.length).toBe(1);
    component.removeCategory(0);
    expect(component.categoryNames.length).toBe(0);
  });

  it('should validate form after filling fields', () => {
    component.postForm.patchValue({
      userEmail:'user@example.com',
      title: 'Sample Title',
      slug: 'sample-title',
      content: 'This is content with more than 10 characters',
      status: 'Published'
    });
    expect(component.postForm.valid).toBeTrue();
  });

it('should call postService.WritePost on valid submit', () => {
  component.postForm.patchValue({
    userEmail: 'test@example.com',
    title: 'Sample Title',
    slug: 'sample-title',
    content: 'This is content with more than 10 characters',
    status: 'Published'
  });
  component.addCategory('tech');
  expect(component.postForm.valid).toBeTrue();

  component.onSubmit();
  expect(mockPostService.WritePost).toHaveBeenCalled();
});
});
