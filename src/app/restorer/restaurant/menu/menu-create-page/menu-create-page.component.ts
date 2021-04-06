import { ActivatedRoute } from '@angular/router';
import { MenuService } from './../../../../core/services/menu.service';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';
import { CreateMenuWrapperObject } from './../../../../shared/models/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'efd-menu-create-page',
  templateUrl: './menu-create-page.component.html',
  styleUrls: ['./menu-create-page.component.scss']
})
export class MenuCreatePageComponent implements OnInit {

  public idRestaurant?: string;

  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idRestaurant = this.route.snapshot.params.id;
  }

  create(menuData: CreateMenuWrapperObject): void{
    const formData = new FormData();
    formData.append('name', menuData?.menu?.name!);
    formData.append('description', menuData?.menu?.description!);
    formData.append('price', menuData?.menu?.price!.toString()!);

    menuData.arrayImages?.forEach((element: ImageWrapper) => {
      formData.append('image', element?.image!)
    });

    this.menuService.createMenu(this.idRestaurant!, formData).subscribe((response)=>{
      //TODO
    })


  }

}
