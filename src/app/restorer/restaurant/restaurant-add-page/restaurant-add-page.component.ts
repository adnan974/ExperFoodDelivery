import { Restaurant } from './../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'efd-restaurant-add-page',
  templateUrl: './restaurant-add-page.component.html',
  styleUrls: ['./restaurant-add-page.component.scss']
})
export class RestaurantAddPageComponent implements OnInit {

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
  }

  create(restaurant:Restaurant): void{

    this.restaurantService.createRestaurant(restaurant).subscribe((response)=>{
      //TODO

    })


  }

}
