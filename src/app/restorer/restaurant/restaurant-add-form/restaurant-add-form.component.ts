import { Restaurant } from './../../../shared/models/restaurant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'efd-restaurant-add-form',
  templateUrl: './restaurant-add-form.component.html',
  styleUrls: ['./restaurant-add-form.component.scss']
})
export class RestaurantAddFormComponent implements OnInit {

  createRestaurantForm!: FormGroup;
  loading : boolean = false;
  @Output() create : EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  constructor(private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.createRestaurantForm = this.fb.group({
      'name': ['', [
        Validators.required,
      ]],
      'description': ['', [
        Validators.required,
      ]],
      'address': ['', [
        Validators.required,
      ]],
      'mainPhotoUrl': ''
     });

  }

  get name() { return this.createRestaurantForm.get('name') }
  get description() { return this.createRestaurantForm.get('description') }
  get address() { return this.createRestaurantForm.get('address') }
  get mainPhotoUrl() { return this.createRestaurantForm.get('mainPhotoUrl') }

  submit() {
    this.create.emit(new Restaurant({
      name : this.name?.value,
      description : this.description?.value,
      address: this.description?.value
    }))

    //this.router.navigate(['/home']);
   }



}
