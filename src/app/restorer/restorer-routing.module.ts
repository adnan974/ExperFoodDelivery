import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { UserRole } from '../shared/models/user';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';
import { RestorerTemplateComponent } from './restorer-template/restorer-template.component';

const routes: Routes = [
  {
    path: 'restorer',
    component: RestorerTemplateComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {roles : [UserRole.Restorer]},
    children: [
      { path: 'home', component : HomeRestorerComponent },
      { path: 'restaurants', loadChildren : ()=> import('./restaurant/restaurant.module').then(r => r.RestaurantModule)},
      { path: 'menus', loadChildren : ()=> import('./menu/menu.module').then(m => m.MenuModule)},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestorerRoutingModule { }
