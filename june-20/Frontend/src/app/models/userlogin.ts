export class UserLogin {
  constructor(
    public Email: string ='',
    public Password: string='',
  ) {}
}
// models/user-login-response.ts
export interface UserLoginResponse {
  email:string;
  token: string;
  refreshToken: string;
}
