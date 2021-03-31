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

  public restaurantList: Array<Restaurant> = new Array<Restaurant>();

  constructor(private restaurantService : RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants()
    .subscribe((restaurants)=>{
      this.restaurantList = restaurants;
    });
  }

  navigateToShow(id:string){
    this.router.navigate([`/restaurants/${id}`]);
  }

  navigateToMenus(id:string){
    this.router.navigate([`/restaurants/${id}/menus`]);
  }

}
