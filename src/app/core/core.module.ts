import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { RestorerModule } from '../restorer/restorer.module';
import { CustomerModule } from '../customer/customer.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { StyleModule } from '../style/style.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicNavbarComponent } from './components/navbars/public-navbar/public-navbar.component';
import { CustomerNavbarComponent } from './components/navbars/customer-navbar/customer-navbar.component';
import { RestorerNavbarComponent } from './components/navbars/restorer-navbar/restorer-navbar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    PublicNavbarComponent,
    CustomerNavbarComponent,
    RestorerNavbarComponent,
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
    PublicNavbarComponent,
    CustomerNavbarComponent,
    RestorerNavbarComponent,
    FooterComponent,
    PageNotFoundComponent,

  ],
})
export class CoreModule { }
