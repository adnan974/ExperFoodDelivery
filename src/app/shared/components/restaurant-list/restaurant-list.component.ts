import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Restaurant } from '../../models/restaurant';


@Component({
  selector: 'efd-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  @Output() show: EventEmitter<string> = new EventEmitter<string>();
  @Output() showMenus: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();
  @Input() restaurants?: Array<Restaurant>;
  @Input() loading: boolean = false;
  loadingArray = new Array(6);

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  onShow(id: string): void{
    this.show.emit(id);
  }

  onShowMenus(restaurant: Restaurant): void{
    this.showMenus.emit(restaurant);
  }

}
