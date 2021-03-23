import { StyleModule } from './../style/style.module';
import { NgModule } from '@angular/core';

import { RestorerRoutingModule } from './restorer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RestorerTemplateComponent } from './restorer-template/restorer-template.component';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';


@NgModule({
  declarations: [RestorerTemplateComponent, HomeRestorerComponent],
  imports: [
    SharedModule,
    StyleModule,
    RestorerRoutingModule
  ]
})
export class RestorerModule { }
