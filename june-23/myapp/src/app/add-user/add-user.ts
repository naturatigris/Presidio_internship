import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '../models/usermodel';
import { addUSer } from '../ngrx/users.actions';

@Component({
  selector: 'app-add-user',
  imports: [],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
    constructor(private store:Store) {
     
     }
     handelAddUser(){
       const newUSer = new UserModel(102,"Doe","Doe","user");
      this.store.dispatch(addUSer({ user: newUSer }));
     }
}