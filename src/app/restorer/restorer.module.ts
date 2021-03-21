import { StyleModule } from './../style/style.module';
import { NgModule } from '@angular/core';

import { RestorerRoutingModule } from './restorer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RestorerTemplateComponent } from './restorer-template/restorer-template.component';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';
import { RestorerNavbarComponent } from './restorer-navbar/restorer-navbar.component';


@NgModule({
  declarations: [RestorerTemplateComponent, HomeRestorerComponent, RestorerNavbarComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestorerRoutingModule
  ]
})
export class RestorerModule { }
