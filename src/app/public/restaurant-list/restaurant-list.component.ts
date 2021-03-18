import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant';

@Component({
  selector: 'efd-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  public restaurantList: Array<Restaurant>;

  // TODO: à supprimer lorsqu'on aura une api
  public restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
    //TODO récupère les infor d'un api
    this.restaurantList = new Array<Restaurant>();

    for (let i = 1; i < 5; i++) {
      this.restaurant = new Restaurant();
      this.restaurant.id = i;
      this.restaurant.name = "Restaurant " + i;
      this.restaurant.adress = "Adress " + i;
      this.restaurantList.push(this.restaurant);
    }
    console.log(this.restaurantList)
  }

}
