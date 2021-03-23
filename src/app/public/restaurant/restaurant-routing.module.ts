import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';


const routes: Routes = [
 { path: '', component: RestaurantPageComponent }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RestaurantRoutingModule { }
