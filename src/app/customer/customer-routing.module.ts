import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../core/guards/auth-guard.guard';
import { CustomerProfilFormComponent } from './customer-profil-form/customer-profil-form.component';
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
      { path: 'updateProfil', component: CustomerProfilFormComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
