import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant';

@Component({
  selector: 'efd-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.scss']
})
export class RestaurantShowComponent implements OnInit {

  @Input() restaurant:Restaurant;
  
  constructor() { 
    

  }

  ngOnInit(): void {
    

  }

}
