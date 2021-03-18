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
import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    LoginPageComponent,
    RegisterPageComponent,
    RestaurantPageComponent,
    RestaurantListComponent,
    RestaurantShowComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    SharedModule,
    StyleModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
