import { AuthService } from './../../../core/services/auth.service';
import { Restaurant } from './../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'efd-restaurant-show-page',
  templateUrl: './restaurant-show-page.component.html',
  styleUrls: ['./restaurant-show-page.component.scss']
})
export class RestaurantShowPageComponent implements OnInit {

  userConnected?: User | null;
  loading: boolean = true;
  public restaurant?: Restaurant;
  public restaurantId?: string;

  constructor(
    private authService: AuthService,
    private restaurantService: RestaurantService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params.id;

    if (this.restaurantId){
      this.restaurantService.getRestaurant(this.restaurantId)
      .subscribe(
        {
          next: (restaurant) => this.restaurant = restaurant,
          error: (err) => console.error(err),
          complete: () => this.loading = false
        }
      );
    }
  }

}
