import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Category } from './category/category';
import { CategoryCreate } from './category-component/category-create/category-create';
import { CategoryDetail } from './category-component/category-detail/category-detail';
import { CategoryEdit } from './category-component/category-edit/category-edit';
import { Colour } from './colour/colour';
import { ColorCreate } from './colour-component/color-create/color-create';
import { ColorEdit } from './colour-component/color-edit/color-edit';
import { ColorDetail } from './colour-component/color-detail/color-detail';

export const routes: Routes = [
    {
    path: '',
    component: Layout, 
    children: [
    {path:'category/create',component:CategoryCreate},
    {path:'category/details/:id',component:CategoryDetail},
    {path:'category/edit/:id',component:CategoryEdit},
    {path:'colors',component:Colour},
    {path:'colors/color/create',component:ColorCreate},
    {path:'colors/color/edit/:id',component:ColorEdit},
    {path:'colors/color/details/:id',component:ColorDetail}



    ]
  },
    {path:'category',component:Category}
];
