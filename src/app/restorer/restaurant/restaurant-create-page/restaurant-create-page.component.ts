import { logging } from 'protractor';
import { CommonService } from 'src/app/core/services/common.service';
import { Restaurant, CreateRestaurantWrapperObject } from '../../../shared/models/restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerResponse } from 'src/app/shared/models/server-response';

@Component({
  selector: 'efd-restaurant-create-page',
  templateUrl: './restaurant-create-page.component.html',
  styleUrls: ['./restaurant-create-page.component.scss']
})
export class RestaurantCreatePageComponent implements OnInit {

  public loading: boolean = false;

  constructor(private restaurantService: RestaurantService, private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  create(restaurantData: CreateRestaurantWrapperObject): void {
    this.loading = true;
    const formData = new FormData();
    formData.append('name', restaurantData?.restaurant?.name!);
    formData.append('description', restaurantData?.restaurant?.description!);
    formData.append('address', restaurantData?.restaurant?.address!);
    formData.append('city', restaurantData?.restaurant?.city!);
    formData.append('cp', restaurantData?.restaurant?.cp!);

    restaurantData.arrayImages?.forEach((element: ImageWrapper) => {
      formData.append('image', element?.image!)
    });

    this.restaurantService.createRestaurant(formData).subscribe(
      {
        next: (response : ServerResponse) => {
          this.commonService.changeSnackBarMessage('Restaurant créé !');
          this.router.navigate(['restorer/restaurants']);
        },
        error: (response) => {
          console.error(response.error);
          this.commonService.changeSnackBarMessage(`Erreur : ${response.error.message}`);
        }
      })
      .add(()=>{this.loading = false})
  }

}

