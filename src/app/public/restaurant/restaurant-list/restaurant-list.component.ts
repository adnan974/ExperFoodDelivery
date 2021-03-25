import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Restaurant } from '../../../shared/models/restaurant';

@Component({
  selector: 'efd-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  public restaurantList: Array<Restaurant> = new Array<Restaurant>();

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

}
