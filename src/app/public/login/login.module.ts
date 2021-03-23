import { StyleModule } from './../../style/style.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    SharedModule,
    StyleModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
