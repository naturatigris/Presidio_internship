export class UserSignUp {
  constructor(
    public Email: string = '',
    public Name: string = '',
    public Password: string='',
    public Role: string = 'User',
    public AdminSecret: string | null = null
  ) {}
}
