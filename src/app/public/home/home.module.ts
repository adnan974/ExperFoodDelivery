import { StyleModule } from './../../style/style.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    StyleModule
  ]
})
export class HomeModule { }
