import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'efd-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.scss']
})
export class RestaurantShowComponent implements OnInit {

  @Output() show: EventEmitter<string> = new EventEmitter<string>();
  @Output() showMenus: EventEmitter<string> = new EventEmitter<string>();
  @Input() restaurant?:Restaurant;
  @Input() loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToMenu(){
     this.restaurant && this.router.navigate([`/restaurants/${this.restaurant.id}/menu`]);
  }

}
