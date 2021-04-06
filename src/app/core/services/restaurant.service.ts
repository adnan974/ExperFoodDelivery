import { Restaurant } from './../../shared/models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/models/menu';
import { ServerResponse } from 'src/app/shared/models/server-response';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private readonly BASE_URL = environment.experFoodDeliveryApi;

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Array<Restaurant>> {

    return this.http.get(`${this.BASE_URL}/api/restaurants`)
      .pipe(
        debounceTime(300),
        map((response: ServerResponse) => {
          return response.data.map((restaurant: any) => {
            return new Restaurant({
              id: restaurant._id,
              name: restaurant.name,
              description: restaurant.description,
              mainPhotoUrl : restaurant.mainPhotoUrl,
              menus: restaurant.menus
            });
          });
        })
      );
  }

  public getRestaurant(idRestaurant: string): Observable<Restaurant>  {
    return this.http.get(`${this.BASE_URL}/api/restaurants/${idRestaurant}`)
      .pipe(
        debounceTime(300),
        map((response: ServerResponse) => {
            return new Restaurant({
              id: response.data._id,
              name: response.data.name,
              address: response.data.address,
              description: response.data.description,
              mainPhotoUrl : response.data.mainPhotoUrl,
              photosUrls : response.data.photosUrls,
              menus: response.data.menus
            });
        })
      );
  }

  public getUserRestaurants(userId: string): Observable<Array<Restaurant>>{
    return this.http.get(`${this.BASE_URL}/api/restaurants?owner=${userId}`)
    .pipe(
      debounceTime(300),
      map((response: ServerResponse) => {
        return response.data.map((restaurant: any) => {
          return new Restaurant({
            id: restaurant._id,
            name: restaurant.name,
            description: restaurant.description,
            mainPhotoUrl : restaurant.mainPhotoUrl,
            menus: restaurant.menus
          });
        });
      })
    );
  }

  public createRestaurant(restaurantFormData : FormData): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/restaurants`, restaurantFormData).pipe(debounceTime(300));
  }

}
