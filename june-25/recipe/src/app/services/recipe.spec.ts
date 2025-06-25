import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { RecipeService } from './recipe';
import { RecipeModel } from '../models/recipemodel';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecipeService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });

    service = TestBed.inject(RecipeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a recipe by ID', () => {
    const dummyRecipe: RecipeModel = new RecipeModel(1, 'Test Recipe');

    service.getRecipe(1).subscribe((recipe) => {
      expect(recipe).toEqual(dummyRecipe);
    });

    const req = httpMock.expectOne('https://dummyjson.com/recipe/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyRecipe);
  });

  it('should fetch all recipes', () => {
    const dummyRecipes: RecipeModel[] = [
      new RecipeModel(1, 'Recipe One'),
      new RecipeModel(2, 'Recipe Two')
    ];

    service.getAll().subscribe((recipes) => {
      expect(recipes.length).toBe(2);
      expect(recipes).toEqual(dummyRecipes);
    });

    const req = httpMock.expectOne('https://dummyjson.com/recipe');
    expect(req.request.method).toBe('GET');
    req.flush({ recipes: dummyRecipes });
  });

  it('should handle error when fetching all recipes fails', () => {
    service.getAll().subscribe({
      next: () => fail('Expected error'),
      error: (err) => {
        expect(err.message).toContain('Recipe fetch failed');
      }
    });

    const req = httpMock.expectOne('https://dummyjson.com/recipe');
    expect(req.request.method).toBe('GET');
    req.flush('Something went wrong', { status: 500, statusText: 'Server Error' });
  });
});
