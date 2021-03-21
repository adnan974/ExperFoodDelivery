import { CustomerUptdateProfilPageComponent } from './customer-uptdate-profil-page/customer-uptdate-profil-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../core/guards/auth-guard.guard';
import { CustomerProfilPageComponent } from './customer-profil-page/customer-profil-page.component';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    canActivate: [AuthGuardGuard],
    component: CustomerTemplateComponent,
    children: [
      { path: 'home', component : HomeCustomerComponent },
      { path: 'profil', component: CustomerProfilPageComponent},
      { path: 'update-profil', component: CustomerUptdateProfilPageComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
