export class RecipeModel {
  constructor(
    public id: number = 0,
    public name: string = '',
    public ingredients: string[] = [],
    public instructions: string[] = [],
    public prepTimeMinutes: number = 0,
    public cookTimeMinutes: number = 0,
    public servings: number = 0,
    public difficulty: string = '',
    public cuisine: string = '',
    public caloriesPerServing: number = 0,
    public tags: string[] = [],
    public userId: number = 0,
    public image: string = '',
    public rating: number = 0,
    public reviewCount: number = 0,
    public mealType: string[] = []
  ) {}
}
