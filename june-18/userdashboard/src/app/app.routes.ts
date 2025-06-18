import { Routes } from '@angular/router';
import { Users } from './users/users';
import { AddUserComponent } from './add-user/add-user';
export const routes: Routes = [
      { path: 'dashboard', component: Users },
  { path: 'adduser', component: AddUserComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];
