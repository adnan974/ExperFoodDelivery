import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  public menuList:Array<Menu>=[];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getAllMenus()
      .subscribe((menus) => {
        this.menuList = menus;
      });
  }

}
