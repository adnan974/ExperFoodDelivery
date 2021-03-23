import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public menuList:Array<Menu>;


  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuList= this.menuService.getMenus();

    // for (let i = 1; i < 5; i++) {
    //   let menu = new Menu();
    //   menu.id = i;
    //   menu.name = "Menu " + i;
    //   menu.price = i+i;
    //   this.menuList.push(menu);
    // }
  }

}
