import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/models/menu';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private readonly BASE_URL = environment.experFoodDeliveryApi;

  constructor(private http: HttpClient) {
  }

  public getRestaurants(): Observable<any> {

    return this.http.get(`${this.BASE_URL}/api/restaurants`)
      .pipe(
        map((items: any) => {
          let itemMapped = items.data.map((element: any) => {
            return new Restaurant({
              id: element._id,
              name: element.name,
              description: element.description
            })
          })
          return itemMapped;

        })
      )
  }

  public getRestaurantMenus(idRestaurant:string){

    console.log("on est dans le restaurant service")
    console.log(idRestaurant)
    let link = `${this.BASE_URL}/api/restaurants/${idRestaurant}/menus`
    return this.http.get(link)
      .pipe(
        map((items:any)=>{
          let menus = items.menus.map((menu:any)=>{
            return new Menu({
              id: menu._id,
              name: menu.name,
              description: menu.description,
              price: menu.price

            })
          })
          return menus
       })

    )
  }





}
