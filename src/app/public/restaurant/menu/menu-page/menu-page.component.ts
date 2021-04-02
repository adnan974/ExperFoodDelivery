import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  public menuList:Array<Menu>=[];

  constructor(private restaurantService: RestaurantService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getRestaurantMenus(params.id);
    });

    
  }

  getRestaurantMenus(id:string){
    this.restaurantService.getRestaurantMenus(id)
    .subscribe((menus:any)=>{
      this.menuList = menus;
    });
  }


  

}
