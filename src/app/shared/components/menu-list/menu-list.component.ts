import { ShopCartService } from '../../../core/services/shop-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/shared/models/menu';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'efd-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menuList?:Array<Menu>;


  constructor(private shopCartService: ShopCartService,private restaurantService:RestaurantService) { }



  ngOnInit(): void {
    
  }

  

  getMenu(){
    // TODO A remplacer
    let id = "abc"
    this.restaurantService.getRestaurantMenus(id)
  }

  addToShopCart(menu : Menu){
    this.shopCartService.addItem(menu);
  }


}
