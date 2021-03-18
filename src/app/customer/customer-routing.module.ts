import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerTemplateComponent, 
    children: [
      { path: 'home', component : HomeCustomerComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
