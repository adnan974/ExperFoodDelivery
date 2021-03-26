import { Menu } from './../../shared/models/menu';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  BASE_URL = environment.experFoodDeliveryApi;
  $shopCart = new BehaviorSubject<Array<Menu>>(new Array<Menu>());

  constructor(private router: Router, private http: HttpClient) { }

  shopCartIsSet() {
    return !!localStorage.getItem('efd-shop-cart');
  }

   addItem(menu:Menu):void{

    let shopCartList : Array<Menu>  = new Array<Menu>();

    if (this.shopCartIsSet()) {

      const shopCartStorage = JSON.parse(localStorage.getItem('efd-shop-cart') ?? "");
      shopCartList  = shopCartStorage.map((item:any)=> {return new Menu({
        id:item._id,
        name : item._name,
        price : item._price
      })})
    }
    shopCartList = [...shopCartList,menu];
    this.$shopCart.next(shopCartList);

      localStorage.removeItem('efd-shop-cart');
      localStorage.setItem('efd-shop-cart', JSON.stringify(shopCartList));
  }

  removeItem():void{

  }

  clearShopCart():void {

  }

  updateShopCartInfos() {
    if (this.shopCartIsSet()) {
      const shopCartStorage = JSON.parse(localStorage.getItem('efd-shop-cart') ?? "");
      let shopCartList  = shopCartStorage.map((item:any)=> {return new Menu({
        id:item._id,
        name : item._name,
        price : item._price
      })})

      this.$shopCart.next(shopCartList)
    }else {
      this.$shopCart.next(new Array<Menu>())
    }

  }




}
