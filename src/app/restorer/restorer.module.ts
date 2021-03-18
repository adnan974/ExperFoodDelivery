import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorerRoutingModule } from './restorer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RestorerComponent } from './restorer/restorer.component';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';


@NgModule({
  declarations: [RestorerComponent, HomeRestorerComponent],
  imports: [
    SharedModule,
    RestorerRoutingModule
  ]
})
export class RestorerModule { }
