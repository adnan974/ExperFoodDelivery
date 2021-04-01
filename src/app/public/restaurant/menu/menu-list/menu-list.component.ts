import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Menu } from 'src/app/shared/models/menu';


@Component({
  selector: 'efd-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public menusList:Array<Menu>= [];
  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameter => {
      console.log(parameter.id);
      this.restaurantService.getRestaurantMenus(parameter.id).subscribe(menus=>{
        this.menusList = menus;
      });
    })

  }

}
