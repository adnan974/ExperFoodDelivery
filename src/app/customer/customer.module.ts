import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';


@NgModule({
  declarations: [HomeCustomerComponent, CustomerTemplateComponent, CustomerPageComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
