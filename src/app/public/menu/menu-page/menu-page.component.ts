import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  public menus: Array<Menu> = new Array<Menu>();
  public loading: boolean = true;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getAllMenus()
    .subscribe(
      {
        next: (menus: Array<Menu>) => this.menus = menus, // TODO
        error: (err) => console.error(err), // TODO
        complete: () => this.loading = false // TODO
      }
    );
  }

}
