import { AuthService } from './../../../core/services/auth.service';
import { Restaurant } from './../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-restaurant-list-page',
  templateUrl: './restaurant-list-page.component.html',
  styleUrls: ['./restaurant-list-page.component.scss']
})
export class RestaurantListPageComponent implements OnInit {

  userConnected?: User | null;
  public restaurantList: Array<Restaurant> = new Array<Restaurant>();

  constructor(private authService : AuthService, private restaurantService : RestaurantService, private router: Router) { }

  ngOnInit(): void {

    this.authService.$userConnected.subscribe((response) => {
      this.userConnected = response;

      this.restaurantService.getUserRestaurants(this.userConnected?.id)
      .subscribe((restaurants)=>{
        this.restaurantList = restaurants;
      });

    })


  }

  navigateToShow(id:string){
    this.router.navigate([`/restaurants/${id}`]);
  }

  navigateToMenus(id:string){
    this.router.navigate([`/restaurants/${id}/menus`]);
  }
  navigateToCreate(){
    this.router.navigate([`/restorer/restaurants/add`]);
  }

}
