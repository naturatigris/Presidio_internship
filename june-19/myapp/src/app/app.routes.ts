import { Routes } from '@angular/router';
import { About } from './about/about';
import { Products } from './products/products';
import { Navbar } from './navbar/navbar';
import { AuthGuard } from './auth-gaurd';
import { Login } from './login/login';
import { ProductDetailComponent } from './product-detail/product-detail';
import { Notification } from './notification/notification';
import { UserList } from './user-list/user-list';
import { UserModel } from './models/usermodel';


export const routes: Routes = [
      {path:'',component:Login},
      {path:'msg',component:Notification},
    {path:'users',component:UserList},


      { path: 'home/:un', component:Navbar,canActivate: [AuthGuard],children:
[
        { path: '', redirectTo: 'products', pathMatch: 'full' }, // default child route

    {path:'about',component:About,canActivate: [AuthGuard]},
    {path:'products',component:Products,canActivate: [AuthGuard]},
    {path:'products/:id',component:ProductDetailComponent,canActivate:[AuthGuard]}
  ]
      },    
        { path: '**', component: Login }

    ];