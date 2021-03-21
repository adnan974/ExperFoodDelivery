import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StyleModule } from '../style/style.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuShowComponent } from './menu-show/menu-show.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from '../core/services/auth.service';
import { PublicTemplateComponent } from './public-template/public-template.component';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    LoginPageComponent,
    RegisterPageComponent,
    RestaurantPageComponent,
    RestaurantListComponent,
    RestaurantShowComponent,
    LoginFormComponent,
    MenuPageComponent,
    MenuListComponent,
    MenuShowComponent,
    RegisterFormComponent,
    PublicTemplateComponent,
    PublicNavbarComponent
  ],
  imports: [
    SharedModule,
    StyleModule,
    PublicRoutingModule,
  ],  
})
export class PublicModule { }
