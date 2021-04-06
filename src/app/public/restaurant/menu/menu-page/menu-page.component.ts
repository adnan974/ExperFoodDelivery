import { Menu } from './../../../../shared/models/menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';


@Component({
  selector: 'efd-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  public menus: Array<Menu> = new Array<Menu>();
  idRestaurant?: string;
  loading: boolean = true;

  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idRestaurant = this.route.snapshot.params.id;

    this.menuService.getRestaurantMenus(this.idRestaurant!)
    .subscribe(
      {
        next: (menus: Array<Menu>) => this.menus = menus, // TODO
        error: (err) => console.error(err), // TODO
        complete: () => this.loading = false // TODO
      }
    );
  }

}
