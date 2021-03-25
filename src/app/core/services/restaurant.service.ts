import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private restaurants : Array<Restaurant> =
  [
    new Restaurant({id:1, name:"Restaurant 1", description:"Cuisine indienne", address:"12 allée des cocos"}),
    new Restaurant({id:1, name:"Restaurant 2", description:"Cuisine chinoise", address:"13 allée des cocos"}),
    new Restaurant({id:1, name:"Restaurant 3", description:"Cuisine kreol", address:"14 allée des cocos"}),
    new Restaurant({id:1, name:"Restaurant 4", description:"Cuisine malgache", address:"15 allée des cocos"}),
    new Restaurant({id:1, name:"Restaurant 5", description:"Cuisine francaise", address:"16 allée des cocos"}),

  ]

  constructor(private http: HttpClient)
  {
  }

  public getRestaurants(): Array<Restaurant> {

      return this.restaurants;
  }

  public getRestaurant(id:number): Restaurant {


    const resto = this.restaurants.filter((item)=>item.id = id);
    return resto[0];
  }

  public postRestaurant(restaurant : Restaurant): Restaurant {

    this.restaurants.push(restaurant);

    return restaurant;
  }

  public deleteRestaurant(id : number): any {

    // TODO : delete
    return 'delteted';
  }



}
