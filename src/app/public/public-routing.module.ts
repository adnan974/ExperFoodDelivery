import { PublicTemplateComponent } from './public-template/public-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [

  {
    path:'',
    component:PublicTemplateComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomePageComponent },
      { path: 'login',loadChildren : ()=> import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register',loadChildren : ()=> import('./register/register.module').then(m => m.RegisterModule) },
      { path: 'restaurants',loadChildren : ()=> import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
      { path: 'menus', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
      { path: 'restaurants/:id/menu',loadChildren : ()=> import('./menu/menu.module').then(m => m.MenuModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
