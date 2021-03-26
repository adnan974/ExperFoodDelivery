import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { RestorerModule } from '../restorer/restorer.module';
import { CustomerModule } from '../customer/customer.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

import { StyleModule } from '../style/style.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    NavbarComponent,

    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    RestorerModule,
    CustomerModule,
    StyleModule,
    HttpClientModule
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,

  ],
})
export class CoreModule { }
