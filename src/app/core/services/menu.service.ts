import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { Menu } from 'src/app/shared/models/menu';
import { ServerResponse } from 'src/app/shared/models/server-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly BASE_URL = environment.experFoodDeliveryApi;

  private menus: Array<Menu> = [];

  constructor(private http: HttpClient) { }

  public getAllMenus(): Observable<Array<Menu>> {
    return this.http.get(`${this.BASE_URL}/api/menus/`)
      .pipe(
        map((response: any) => {
          return response.data.map((menu: any) => {
            return new Menu({
              id: menu._id,
              name: menu.name,
              price: menu.price
            });
          });
        })
      );

  }

  public getRestorerMenus(restorerId: string): Observable<Array<Menu>> {
    return this.http.get(`${this.BASE_URL}/api/users/${restorerId}/menus`).pipe(
      map((response: any) => {
        return response.data.map((menu: any) => {
          return new Menu({
            id: menu._id,
            name: menu.name,
            price: menu.price
          });
        });
      })
    );
  }

  public getRestaurantMenus(idRestaurant: string): Observable<Array<Menu>>{
    return this.http.get(`${this.BASE_URL}/api/restaurants/${idRestaurant}/menus`).pipe(
        map((response: ServerResponse) => {
          return response.data.map((menu: any) => {
            return new Menu({
              id: menu._id,
              name: menu.name,
              description: menu.description,
              price: menu.price
            })
          })

       })

    )
  }

  public createMenu(idRestaurant: string, menuFormData: FormData): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/restaurants/${idRestaurant}/menus`, menuFormData).pipe(debounceTime(300));
  }


}
