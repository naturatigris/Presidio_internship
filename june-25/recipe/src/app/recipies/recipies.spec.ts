import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recipies } from './recipies';
import { RecipeService } from '../services/recipe';
import { of, throwError } from 'rxjs';
import { RecipeModel } from '../models/recipemodel';
import { Recipe } from '../recipe/recipe';  

describe('Recipies Component', () => {
  let component: Recipies;
  let fixture: ComponentFixture<Recipies>;
  let mockRecipeService: jasmine.SpyObj<RecipeService>;

  const dummyRecipes: RecipeModel[] = [
    new RecipeModel(1, 'Recipe One'),
    new RecipeModel(2, 'Recipe Two')
  ];

  beforeEach(async () => {
    mockRecipeService = jasmine.createSpyObj('RecipeService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [Recipies,Recipe],
      providers: [{ provide: RecipeService, useValue: mockRecipeService }]
    }).compileComponents();

    fixture = TestBed.createComponent(Recipies);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and store recipes on init (success case)', () => {
    mockRecipeService.getAll.and.returnValue(of(dummyRecipes));

    fixture.detectChanges(); 

    expect(component.recipies()).toEqual(dummyRecipes);
    expect(component.error()).toBeNull();
  });

  it('should set error signal when service fails', () => {
    mockRecipeService.getAll.and.returnValue(throwError(() => new Error('Server Error')));

    fixture.detectChanges();

    expect(component.recipies()).toEqual([]);
    expect(component.error()).toBe('Failed to fetch recipes.');
  });
});
