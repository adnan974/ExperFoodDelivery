import { RestaurantRoutingModule } from './restaurant-routing.module';
import { StyleModule } from './../../style/style.module';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { NgModule } from '@angular/core';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RestaurantPageComponent, RestaurantListComponent, RestaurantShowComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
