import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from 'src/app/shared/models/menu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly BASE_URL = environment.experFoodDeliveryApi;

  private menus:Array<Menu>=[];

  constructor(private http: HttpClient){}

  public getMenus():Observable<any>{
    return (
      this.http.get(this.BASE_URL+'/api/menus')
      .pipe(
        map((menus:any)=>{
          return menus.map((menu:any)=>{
            return new Menu({
              id:menu._id,
              name:menu._name,
              price:menu._price
            })
          })
        })
      )
    )
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
