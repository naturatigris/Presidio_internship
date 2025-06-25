import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recipe } from './recipe';
import { RecipeModel } from '../models/recipemodel';
import { RecipeService } from '../services/recipe';


describe('Recipe Component', () => {
  let component: Recipe;
  let fixture: ComponentFixture<Recipe>;
  let mockRecipeService: jasmine.SpyObj<RecipeService>;


  const dummyRecipe = new RecipeModel(
    1,
    'Mock Paneer Butter Masala',
    ['Paneer', 'Butter', 'Masala'],
    ['Mix it all', 'Cook well'],
    15, 30, 2, 'Medium', 'Indian',
    320, ['spicy', 'vegetarian'],
    123, 'https://someimage.com', 4.5, 150
  );

  beforeEach(async () => {
        mockRecipeService = jasmine.createSpyObj('RecipeService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [Recipe],
      providers: [{ provide: RecipeService, useValue: mockRecipeService }]
      
    }).compileComponents();

    fixture = TestBed.createComponent(Recipe);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept and set the input recipe', () => {
    component.recipe = dummyRecipe;
    fixture.detectChanges();

    expect(component.recipe?.name).toBe('Mock Paneer Butter Masala');
    expect(component.recipe?.servings).toBe(2);
    expect(component.recipe?.difficulty).toBe('Medium');
  });
});
