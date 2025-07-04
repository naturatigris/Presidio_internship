import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });

    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should fetch all category names', () => {
    const mockCategoryNames = ['Tech', 'Health', 'Finance'];

    service.getAllCategoryNames().subscribe((categories) => {
      expect(categories).toEqual(mockCategoryNames);
    });

    const req = httpMock.expectOne('http://localhost:5147/api/v1/category/names');
    expect(req.request.method).toBe('GET');
    req.flush(mockCategoryNames); 
  });
});
