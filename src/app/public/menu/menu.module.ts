import { MenuRoutingModule } from './menu-routing.module';
import { StyleModule } from './../../style/style.module';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MenuPageComponent],
  imports: [
    SharedModule,
    StyleModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
