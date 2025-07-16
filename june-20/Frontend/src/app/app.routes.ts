import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { AuthGuard,AdminGuard } from './authgaurd';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { CreatePost } from './create-post/create-post';
import { PostDetailComponent } from './post-detail-component/post-detail-component';
import { Myposts } from './myposts/myposts';
import { UpdatePostComponent } from './post-update/post-update';
import { History } from './history/history';
import { Notifications } from './notifications/notifications';
import { Admindashboard } from './admindashboard/admindashboard';
import { Adminpostcomponent } from './admindashboard-component/adminpostcomponent/adminpostcomponent';
import { RenderMode } from '@angular/ssr';
import { RedirectComponent } from './redirect';
export const routes: Routes = [
    { path: 'home', component: Home },
      {path:'login',component:Login},
      {path: 'signup',component:Register},
        {
    path: '',
    component: Layout,
      canActivate: [AuthGuard],

    children: [
            { path: '', component: RedirectComponent }, 

      {path: 'dashboard', component: Dashboard },
      {path:'dashboard/admin',component:Admindashboard,canActivate: [AdminGuard] },
      {path:'dashboard/admin/posts',component:Adminpostcomponent,canActivate: [AdminGuard] },
            { path: 'dashboard/admin/**', redirectTo: 'dashboard/admin' },


      {path:'profile',component:Profile},
      { path: 'profile/:email', component: Profile, canActivate: [AdminGuard],  data: { renderMode: 'dynamic' },
       
 },
      {path:'settings',component:Settings},
      {path:'Create-post',component:CreatePost},
      {path:'dashboard/post/:id',component:PostDetailComponent,  data: { renderMode: 'dynamic' } 
},
      {path:'myposts',component:Myposts},
      { path: 'myposts/edit/:id', component: UpdatePostComponent ,  data: { renderMode: 'dynamic' } 
},
      {path:'history',component:History},
      {path:'notification',component:Notifications}



    ]
  },

  { path: '**', redirectTo: '/home' ,    data: { renderMode: 'dynamic' }
}

];
