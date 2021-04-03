import { MenuListComponent } from './components/menu-list/menu-list.component';
import { StyleModule } from './../style/style.module';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';



@NgModule({
  declarations: [RestaurantListComponent, MenuListComponent, DragAndDropDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StyleModule
  ],
  exports : [
    CommonModule,
    ReactiveFormsModule,
    RestaurantListComponent,
    MenuListComponent,
    DragAndDropDirective
  ]
})
export class SharedModule { }
