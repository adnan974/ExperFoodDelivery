import { StyleModule } from 'src/app/style/style.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuListPageComponent } from './menu-list-page/menu-list-page.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuCreatePageComponent } from './menu-create-page/menu-create-page.component';
import { MenuCreateFormComponent } from './menu-create-form/menu-create-form.component';




@NgModule({
  declarations: [MenuListPageComponent, MenuCreatePageComponent, MenuCreateFormComponent],
  imports: [
    SharedModule,
    StyleModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
