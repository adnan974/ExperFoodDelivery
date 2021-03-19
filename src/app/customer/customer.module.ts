import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { MatIconModule } from '@angular/material/icon';
import { CustomerProfilShowComponent } from './customer-profil-show/customer-profil-show.component';
import { CustomerProfilFormComponent } from './customer-profil-form/customer-profil-form.component';
import { CustomerProfilPageComponent } from './customer-profil-page/customer-profil-page.component';
import { StyleModule } from '../style/style.module';


@NgModule({
  declarations: [HomeCustomerComponent, CustomerTemplateComponent, CustomerPageComponent, CustomerProfilShowComponent, CustomerProfilFormComponent, CustomerProfilPageComponent ],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    MatIconModule,
    StyleModule
  ]
})
export class CustomerModule { }
