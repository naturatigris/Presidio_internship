import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { AuthGuard } from './authgaurd';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { CreatePost } from './create-post/create-post';
import { PostDetailComponent } from './post-detail-component/post-detail-component';
export const routes: Routes = [
    { path: 'home', component: Home },
      {path:'login',component:Login},
      {path: 'signup',component:Register},
        {
    path: '',
    component: Layout,
      canActivate: [AuthGuard],

    children: [
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component: Dashboard },
      {path:'profile',component:Profile},
      {path:'settings',component:Settings},
      {path:'Create-post',component:CreatePost},
      {path:'dashboard/post/:id',component:PostDetailComponent}

    ]
  },

  { path: '**', redirectTo: '/home' }

];
