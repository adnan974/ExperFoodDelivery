import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { StyleModule } from 'src/app/style/style.module';



@NgModule({
  declarations: [MenuPageComponent, MenuListComponent],
  imports: [
    MenuRoutingModule,
    SharedModule,
    StyleModule
  ]
})
export class MenuModule { }
