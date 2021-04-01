import { StyleModule } from './../../style/style.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuListPageComponent } from './menu-list-page/menu-list-page.component';
import { MenuRoutingModule } from './menu-routing.component';



@NgModule({
  declarations: [MenuListPageComponent],
  imports: [
    SharedModule,
    StyleModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
