import { UserRole } from './../../models/user';
import { ShopCartService } from '../../../core/services/shop-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'efd-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menus?: Array<Menu>;
  @Input() loading: boolean = false;
  @Input() role?: UserRole;
  public loadingArray = new Array(6);

  get userRole(): typeof UserRole {
    return UserRole;
  }

  constructor(private shopCartService: ShopCartService, private restaurantService: RestaurantService) { }

  ngOnInit(): void {}

  addToShopCart(menu: Menu): void{
    this.shopCartService.addItem(menu);
  }


}
