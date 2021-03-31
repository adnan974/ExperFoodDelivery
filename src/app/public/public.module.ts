import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StyleModule } from '../style/style.module';
import { PublicTemplateComponent } from './public-template/public-template.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    PublicTemplateComponent,
  ],
  imports: [
    SharedModule,
    StyleModule,
    PublicRoutingModule,
    HomeModule,
  ],
})
export class PublicModule { }
