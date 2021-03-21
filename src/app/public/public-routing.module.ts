import { PublicTemplateComponent } from './public-template/public-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [

  {
    path:'',
    component:PublicTemplateComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path:'restaurants',component: RestaurantPageComponent},
      {path:'restaurants/:id/menu',component: MenuPageComponent},
      {path:'login',component: LoginPageComponent},
      {path:'register',component: RegisterPageComponent},
    ]
  }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
