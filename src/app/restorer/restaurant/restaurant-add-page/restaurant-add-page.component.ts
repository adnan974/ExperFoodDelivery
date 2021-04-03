import { Restaurant, CreateRestaurantWrapperObject } from './../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';

@Component({
  selector: 'efd-restaurant-add-page',
  templateUrl: './restaurant-add-page.component.html',
  styleUrls: ['./restaurant-add-page.component.scss']
})
export class RestaurantAddPageComponent implements OnInit {

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
  }

  create(restaurantData:CreateRestaurantWrapperObject): void{

    let formData = new FormData();
    formData.append('name', restaurantData?.restaurant?.name!);
    formData.append('description', restaurantData?.restaurant?.description!);
    formData.append('address', restaurantData?.restaurant?.address!);

    restaurantData.arrayImages?.forEach((element : ImageWrapper) => {
      formData.append('image', element?.image!)
    });

    this.restaurantService.createRestaurant(formData).subscribe((response)=>{
      //TODO

    })


  }

}
