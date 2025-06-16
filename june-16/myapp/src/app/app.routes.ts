import { Routes } from '@angular/router';
import { About } from './about/about';
import { Products } from './products/products';
import { Navbar } from './navbar/navbar';
import { App } from './app';

export const routes: Routes = [
      { path: '', redirectTo: 'products', pathMatch: 'full' },

    {path:'about',component:About},
    {path:'products',component:Products}
];