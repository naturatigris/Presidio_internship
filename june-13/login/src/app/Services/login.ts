// src/app/services/login.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private dummyUser = new User('admin', 'password123');

  login(user: User): boolean {
    return user.UserName === this.dummyUser.UserName && user.Password === this.dummyUser.Password;
  }

  saveUser(user: User, useSession: boolean = false): void {
    const storage = useSession ? sessionStorage : localStorage;
    storage.setItem('loggedInUser', JSON.stringify(user));
  }

  getUser(useSession: boolean = false): User | null {
    const storage = useSession ? sessionStorage : localStorage;
    const data = storage.getItem('loggedInUser');
    if (data) {
      const obj = JSON.parse(data) as { UserName: string; Password: string };
      const user = new User(obj.UserName, obj.Password); // ✅ OK
      return user;
    }
    return null;
  }

  logout(useSession: boolean = false): void {
    const storage = useSession ? sessionStorage : localStorage;
    storage.removeItem('loggedInUser');
  }
}
