import { Restaurant } from './../../shared/models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/models/menu';
import { ServerResponse } from 'src/app/shared/models/server-response';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private readonly BASE_URL = environment.experFoodDeliveryApi;

  constructor(private http: HttpClient) {
  }

  public getRestaurants(): Observable<Array<Restaurant>> {

    return this.http.get(`${this.BASE_URL}/api/restaurants`)
      .pipe(
        tap((rawData)=>{
          console.log(rawData);
        }),
        map((items: any) => {
          let itemMapped = items.data.map((element: any) => {
            return new Restaurant({
              id: element._id,
              name: element.name,
              description: element.description,
              mainPhotoUrl : element.mainPhotoUrl,
              menus: element.menus,

            })
          })
          return itemMapped;

        })
      )
  }

  public getUserRestaurants(userId:string | undefined) :Observable<Array<Restaurant>>{
    return this.http.get(`${this.BASE_URL}/api/restaurants?owner=${userId}`)
    .pipe(
      tap((rawData)=>{
        console.log(rawData);
      }),
      map((items: any) => {
        let itemMapped = items.data.map((element: any) => {
          console.log(element.menus)
          return new Restaurant({
            id: element._id,
            name: element.name,
            description: element.description,
            mainPhotoUrl : element.mainPhotoUrl,
            menus: element.menus,

          })
        })
        return itemMapped;

      })
    )

  }

  public getRestaurantMenus(idRestaurant:string){

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

  public createRestaurant(restaurantFormData : FormData): Observable<any> {

    return this.http.post(`${this.BASE_URL}/api/restaurants`, restaurantFormData);

  }





}
