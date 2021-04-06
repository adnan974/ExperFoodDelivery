import { RestaurantCreateFormComponent } from './restaurant-create-form/restaurant-create-form.component';
import { RestaurantCreatePageComponent } from './restaurant-create-page/restaurant-create-page.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { StyleModule } from './../../style/style.module';
import { SharedModule } from './../../shared/shared.module';
import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { NgModule } from '@angular/core';

import { RestaurantShowPageComponent } from './restaurant-show-page/restaurant-show-page.component';


@NgModule({
  declarations: [RestaurantListPageComponent, RestaurantCreatePageComponent, RestaurantCreateFormComponent, RestaurantShowPageComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestaurantRoutingModule,
  ]
})
export class RestaurantModule { }
