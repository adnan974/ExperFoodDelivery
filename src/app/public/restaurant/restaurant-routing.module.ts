import { RestaurantShowPageComponent } from './restaurant-show-page/restaurant-show-page.component';
import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: '', component: RestaurantListPageComponent },
 { path: ':id', component: RestaurantShowPageComponent },
 { path: ':id/menus',  loadChildren : ()=> import('./menu/menu.module').then(m => m.MenuModule)}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RestaurantRoutingModule { }


