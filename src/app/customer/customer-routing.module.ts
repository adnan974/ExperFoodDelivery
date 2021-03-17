import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent, 
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
