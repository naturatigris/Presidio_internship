import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Recipies } from './recipies/recipies';
import { RecipeService } from './services/recipe';
import { of } from 'rxjs';

describe('App', () => {
    let mockRecipeService: jasmine.SpyObj<RecipeService>;
    

  beforeEach(async () => {
            mockRecipeService = jasmine.createSpyObj('RecipeService', ['getAll']);
            mockRecipeService.getAll.and.returnValue(of([]));


    await TestBed.configureTestingModule({
      imports: [App,Recipies],
      providers: [{ provide: RecipeService, useValue: mockRecipeService }]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('cuisines');
  });
});
