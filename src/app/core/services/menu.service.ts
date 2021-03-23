import { Injectable } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menus:Array<Menu>;

  constructor(){
      this.menus = new Array<Menu>();

      for(let i =1;i<6;i++){
        let menu = new Menu();
        menu.id = i;
        menu.name = "Menu "+i;
        menu.price = i*5;
        this.menus.push(menu);
      }
   }


  public getMenus():Array<Menu>{
    return this.menus;
  }

  public getMenu(id:number):Menu{
    const menu = this.menus.filter((item) => item.id = id);
    return menu[0];
  }

  public updateMenu(menu:Menu):Menu{
      //TODO
      return new Menu();
  }

  public deleteMenu(id:number):void{
      //TODO
  }

  public postMenu(menu:Menu):Menu{
    this.menus.push(menu);
    return menu;
  }

}
