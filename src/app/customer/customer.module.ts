import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [HomeCustomerComponent, CustomerComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
