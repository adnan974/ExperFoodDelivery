import { RestaurantAddPageComponent } from './restaurant-add-page/restaurant-add-page.component';
import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: '', component: RestaurantListPageComponent },
 { path: 'add', component: RestaurantAddPageComponent },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RestaurantRoutingModule { }

