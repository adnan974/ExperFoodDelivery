import { MenuService } from 'src/app/core/services/menu.service';
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

  public currentUser?: User | null;
  public menus: Array<Menu> = [];
  public loading: boolean = true;


  constructor(private authService: AuthService, private menuService: MenuService) { }

  ngOnInit(): void {

    this.currentUser = this.authService.currentUser;

    if (this.currentUser) {
      this.menuService.getRestorerMenus(this.currentUser.id!)
      .subscribe(
        {
          next: (menus: Array<Menu>) => this.menus = menus, // TODO
          error: (err) => console.error(err), // TODO
          complete: () => this.loading = false // TODO
        }
      );
    }

  }

}
