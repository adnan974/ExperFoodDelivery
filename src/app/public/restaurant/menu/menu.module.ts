import { NgModule } from '@angular/core';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';



@NgModule({
  declarations: [MenuPageComponent, MenuListComponent],
  imports: [
    MenuRoutingModule
  ]
})
export class MenuModule { }
