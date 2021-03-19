import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../shared/models/restaurant';

@Component({
  selector: 'efd-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.scss']
})
export class RestaurantShowComponent implements OnInit {

  @Input() restaurant:Restaurant;
  
  constructor(private router:Router) { 
    

  }

  ngOnInit(): void {
    

  }

  navigateToMenu(){
    
    let link= "/restaurants/"+this.restaurant.id+"/menu"
      this.router.navigate([link]);
  }

}
