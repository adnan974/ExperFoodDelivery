import { ShopCartService } from './../../services/shop-cart.service';
import { Menu } from './../../../shared/models/menu';
import { AuthService } from '../../services/auth.service';
import { User, UserRole } from '../../../shared/models/user';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, Input, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'efd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  innerWidth: any;
  @Input() opened: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  get userRole(): typeof UserRole {
    return UserRole;
  }

  userConnected?: User | null;
  shopCart: Array<Menu> | null = new Array<Menu>();
  shopCartCount : number = this.shopCart ? this.shopCart.length : 0;

  publicNavItems: Array<any> = [
    {
      name: 'Restaurants',
      link: '/restaurants',
      icon: 'storefront'
    },
    {
      name: 'Menus',
      link: '/menus',
      icon: 'fastfood'
    },

  ];

  customerNavItems: Array<any> = [
    ...this.publicNavItems,
    {
      name: 'Profil',
      link: '/customer/profil',
      icon: 'person'
    },
  ];

  restorerNavItems: Array<any> = [
    ...this.publicNavItems,
  ];

  navItems: Array<any> = [];


  constructor(private router: Router, private authService: AuthService, private shopCartService : ShopCartService) { }

  ngOnInit(): void {

    this.innerWidth = window.innerWidth;


    this.authService.$userConnected.subscribe((response) => {
      this.userConnected = response;
      if (this.userConnected) {
        switch (this.userConnected.role) {
          case UserRole.Customer:
            this.navItems = this.customerNavItems;
            break;
          case UserRole.Restorer:
            this.navItems = this.restorerNavItems
            break;
          default:
            this.navItems = this.publicNavItems;
        }

      } else {
        this.navItems = this.publicNavItems;
      }
    })


    this.shopCartService.$shopCart.subscribe((response) => {
      this.shopCart = response;
      this.shopCartCount = this.shopCart ? this.shopCart.length : 0;
    })
    this.shopCartService.updateShopCartInfos();

  }

  navigate(link: string) {
    this.router.navigate([link]);
  }

  logout() {
    this.authService.logout();
  }

}
