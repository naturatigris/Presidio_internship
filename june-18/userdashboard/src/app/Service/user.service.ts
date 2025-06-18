import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

fetchAllUsers(): Observable<any> {
  return from(
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
              .then(data => {
          console.log('Raw API response:', data); 
          return data.users;})

  );
}
addUser(userData: any): Promise<any> {
  return fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  })
  .then(res => res.json());
}

}
