import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({ providedIn: 'root' })
export class UserService {
      private initialUsers: UserModel[] = [
    new UserModel(1, 'Amit Sharma', 23, 'male', 'Admin','pass@123'),
    new UserModel(2, 'Neha Velani', 29, 'female', 'User','pass@123'),
    new UserModel(3, 'Rohit Shikandh', 33, 'male', 'Guest','pass@123'),
    new UserModel(4, 'Anand', 27, 'male', 'Admin','pass@123'),



  ];

  private usersSubject = new BehaviorSubject<UserModel[]>(this.initialUsers);
  users$ = this.usersSubject.asObservable();

  addUser(user: UserModel) {
    const current = this.usersSubject.value;
      const nextId = current.length > 0 ? Math.max(...current.map(u => u.id)) + 1 : 1;

  const newUser = new UserModel(
    nextId,
    user.fullName,
    user.age,
    user.gender,
        user.role,
    user.password
  );


    this.usersSubject.next([...current, newUser]);
  }
}
