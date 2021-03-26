import { ShopCartService } from './../../../core/services/shop-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-show',
  templateUrl: './menu-show.component.html',
  styleUrls: ['./menu-show.component.scss']
})
export class MenuShowComponent implements OnInit {
  @Input() menu?:Menu;
  constructor(private shopCartService: ShopCartService) { }

  ngOnInit(): void {
  }

  addToShopCart(menu : Menu){
    this.shopCartService.addItem(menu);
  }

}
