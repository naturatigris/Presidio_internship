export class CreatePost {
  constructor(
    public userEmail: string = '',
    public title: string = '',
    public slug: string = '',
    public content: string = '',
    public categoryNames: string[] = [],
    public status: string = 'Published',
    public images: File[] = []
  ) {}
}
