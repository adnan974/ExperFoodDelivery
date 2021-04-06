import { Restaurant } from './../../../../shared/models/restaurant';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-menu-list-page',
  templateUrl: './menu-list-page.component.html',
  styleUrls: ['./menu-list-page.component.scss']
})
export class MenuListPageComponent implements OnInit {

  public restaurantId?: string;
  public restaurant?: Restaurant;
  public loading: boolean = true;
  public currentUser? : User | null;

  constructor(
    private authService: AuthService,
    private restaurantService: RestaurantService,
    private router: Router,
    private route: ActivatedRoute) {
      this.restaurant = new Restaurant({
        id: this.router.getCurrentNavigation()?.extras?.state?._id,
        name: this.router.getCurrentNavigation()?.extras?.state?.name,
        description: this.router.getCurrentNavigation()?.extras?.state?.description,
        address: this.router.getCurrentNavigation()?.extras?.state?.address
      });
    }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.restaurantId = this.route.snapshot.params.id;

    this.restaurantService.getRestaurant(this.restaurantId!).subscribe({
      next: (restaurant) => this.restaurant = restaurant, // TODO
      error: (err) => console.error(err), // TODO
      complete: () => this.loading = false // TODO
    });
  }

  navigateToCreate(): void{
    this.router.navigate([`/restorer/restaurants/${this.restaurantId}/menus/create`]);
  }

}
