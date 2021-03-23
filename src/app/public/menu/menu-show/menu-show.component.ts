import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-show',
  templateUrl: './menu-show.component.html',
  styleUrls: ['./menu-show.component.scss']
})
export class MenuShowComponent implements OnInit {
  @Input() menu:Menu;
  constructor() { }

  ngOnInit(): void {
  }

}
