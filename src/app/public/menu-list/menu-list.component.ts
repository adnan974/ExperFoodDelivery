import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public menuList:Array<Menu>;


  constructor() { }

  ngOnInit(): void {
    this.menuList= new Array<Menu>()

    for (let i = 1; i < 5; i++) {
      let menu = new Menu();
      menu.id = i;
      menu.name = "Menu " + i;
      menu.price = i+i;
      this.menuList.push(menu);
    }
  }

}
