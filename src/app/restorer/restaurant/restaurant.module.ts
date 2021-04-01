import { RestaurantAddPageComponent } from './restaurant-add-page/restaurant-add-page.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { StyleModule } from './../../style/style.module';
import { SharedModule } from './../../shared/shared.module';
import { RestaurantListPageComponent } from './restaurant-list-page/restaurant-list-page.component';
import { NgModule } from '@angular/core';
import { RestaurantAddFormComponent } from './restaurant-add-form/restaurant-add-form.component';




@NgModule({
  declarations: [RestaurantListPageComponent, RestaurantAddPageComponent, RestaurantAddFormComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestaurantRoutingModule,
  ]
})
export class RestaurantModule { }
