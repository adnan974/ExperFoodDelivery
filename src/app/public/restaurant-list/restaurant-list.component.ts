import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
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

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
    //TODO récupère les infor d'un api
    this.restaurantList = this.restaurantService.getRestaurants();

    // for (let i = 1; i < 5; i++) {
    //   this.restaurant = new Restaurant(i, "Restaurant " + i, "Adress " + i );
    //   this.restaurantList.push(this.restaurant);
    // }
    console.log(this.restaurantList)
  }

}
