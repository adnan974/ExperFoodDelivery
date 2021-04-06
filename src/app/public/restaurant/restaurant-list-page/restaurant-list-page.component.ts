import { Restaurant } from './../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'efd-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss']
})
export class RestaurantListPageComponent implements OnInit {

  public restaurants: Array<Restaurant> = new Array<Restaurant>();
  loading: boolean = true;


  constructor(private restaurantService : RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants()
    .subscribe(
      {
        next: (restaurants)=>this.restaurants = restaurants,
        error: (err)=>console.error(err),
        complete:()=>this.loading = false
      }
    );
  }

  navigateToShow(id:string){
    this.router.navigate([`/restaurants/${id}`]);
  }

  navigateToMenus(restaurant: Restaurant){
    this.router.navigate([`/restaurants/${restaurant.id}/menus`, {restaurant}]);
  }

}
