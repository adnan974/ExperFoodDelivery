import { StyleModule } from './../style/style.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantListComponent, MenuListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StyleModule
  ],
  exports : [
    CommonModule,
    ReactiveFormsModule,
    RestaurantListComponent,
    MenuListComponent
  ]
})
export class SharedModule { }
