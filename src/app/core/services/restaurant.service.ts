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




}
