import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import { RestaurantShowPageComponent } from './restaurant-show-page/restaurant-show-page.component';

import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { StyleModule } from './../../style/style.module';

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RestaurantListPageComponent, RestaurantShowPageComponent, RestaurantShowComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestaurantRoutingModule,

  ]
})
export class RestaurantModule { }
