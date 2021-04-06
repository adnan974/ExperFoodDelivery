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
  loading: boolean = true;
  public restaurantList: Array<Restaurant> = new Array<Restaurant>();

  constructor(private authService: AuthService, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {

    this.userConnected = this.authService.currentUser;

    if (!!this.userConnected && !!this.userConnected.id){
      this.restaurantService.getUserRestaurants(this.userConnected.id)
      .subscribe(
        {
          next: (restaurants) => this.restaurantList = restaurants,
          error: (err) => console.error(err),
          complete: () => this.loading = false
        }
      );
    }
  }

  navigateToShow(id: string): void{
    this.router.navigate([`/restorer/restaurants/${id}`]);
  }

  navigateToMenus(restaurant: Restaurant): void{
    this.router.navigate([`/restorer/restaurants/${restaurant.id}/menus`], {state: restaurant});
  }
  navigateToCreate(): void{
    this.router.navigate([`/restorer/restaurants/create`]);
  }

}
