import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { AddUserComponent } from './add-user/add-user';
export const routes: Routes = [
      { path: 'users', component: UserList },
  { path: 'adduser', component: AddUserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }

];
