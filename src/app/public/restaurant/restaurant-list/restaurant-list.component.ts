import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Restaurant } from '../../../shared/models/restaurant';

@Component({
  selector: 'efd-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurants?:  Array<Restaurant>;
  @Output() show : EventEmitter<string> = new EventEmitter<string>();
  @Output() showMenus : EventEmitter<string> = new EventEmitter<string>();

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
  }

  onShow(id : string){
    this.show.emit(id)
  }

  onShowMenus(id : string){
    this.showMenus.emit(id)
  }

}
