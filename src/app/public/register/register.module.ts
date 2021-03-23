import { RegisterFormComponent } from './register-form/register-form.component';
import { StyleModule } from './../../style/style.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterPageComponent, RegisterFormComponent],
  imports: [
    SharedModule,
    StyleModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
