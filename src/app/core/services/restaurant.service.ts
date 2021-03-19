import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private restaurants : Array<Restaurant> = 
  [
    new Restaurant(1,"Restaurant 1", "Cuisine indienne", "12 allée des cocos"),
    new Restaurant(2,"Restaurant 2", "Cuisine chinoise", "13 allée des cocos"),
    new Restaurant(3,"Restaurant 3", "Cuisine  kreol", "14 allée des cocos"),
    new Restaurant(4,"Restaurant 4", "Cuisine malgache","15 allée des cocos"),
    new Restaurant(5,"Restaurant 5", "Cuisine francaise", "16 allée des cocos"),  
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
