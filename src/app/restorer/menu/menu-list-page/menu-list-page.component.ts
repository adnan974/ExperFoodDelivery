import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Menu } from 'src/app/shared/models/menu';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-menu-list-page',
  templateUrl: './menu-list-page.component.html',
  styleUrls: ['./menu-list-page.component.scss']
})
export class MenuListPageComponent implements OnInit {

  userConnected?: User | null;
  public menuList:Array<Menu>=[]; 


  constructor(private restaurantService:RestaurantService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.$userConnected.subscribe((response) => {
      this.userConnected = response;
      console.log(this.userConnected?.id)
      this.getAllRestorerMenus(this.userConnected?.id)
    })

  }

  getAllRestorerMenus(userId:string | undefined){
    this.restaurantService.getUserRestaurants(userId)
    .subscribe((restaurants=>{
      restaurants.forEach((restaurant:any) => {
        this.restaurantService.getRestaurantMenus(restaurant.id)
        .subscribe((menus:any)=>{
          this.menuList = this.menuList.concat(menus);
        })
        
      });
    }))
  }

  

}
