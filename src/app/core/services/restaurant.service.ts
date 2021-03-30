import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private restaurants: Array<Restaurant> = [];

  constructor(private http: HttpClient) {
  }

  public getRestaurants(): Observable<any> {

    const BASE_URL = environment.experFoodDeliveryApi;

    return this.http.get(BASE_URL + '/api/restaurants')
      .pipe(
        map((items: any) => {
          let itemMapped = items.data.map((element: any) => {
            return new Restaurant({
              id: element.id,
              name: element.name,
              description: element.description
            })
          })
          return itemMapped;

        })
      )
  }

  public getRestaurant(id: string): Restaurant {


    const resto = this.restaurants.filter((item) => item.id = id);
    return resto[0];
  }

  public postRestaurant(restaurant: Restaurant): Restaurant {

    this.restaurants.push(restaurant);

    return restaurant;
  }

  public deleteRestaurant(id: number): any {

    // TODO : delete
    return 'delteted';
  }



}
