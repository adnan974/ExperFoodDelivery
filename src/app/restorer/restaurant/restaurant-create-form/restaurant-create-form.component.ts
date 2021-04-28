import { Restaurant, CreateRestaurantWrapperObject } from '../../../shared/models/restaurant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';

@Component({
  selector: 'efd-restaurant-create-form',
  templateUrl: './restaurant-create-form.component.html',
  styleUrls: ['./restaurant-create-form.component.scss']
})
export class RestaurantCreateFormComponent implements OnInit {

  public createRestaurantForm!: FormGroup;
  public imagesList: Array<ImageWrapper> = new Array<ImageWrapper>();

  @Input() loading: boolean = false;
  @Output() create: EventEmitter<CreateRestaurantWrapperObject> = new EventEmitter<CreateRestaurantWrapperObject>();

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
      'city': ['', [
        Validators.required,
      ]],
      'cp': ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(5)
      ]],
      'mainPhotoUrl': ''
    });

  }

  get name() { return this.createRestaurantForm.get('name') }
  get description() { return this.createRestaurantForm.get('description') }
  get address() { return this.createRestaurantForm.get('address') }
  get city() { return this.createRestaurantForm.get('address') }
  get cp() { return this.createRestaurantForm.get('cp') }
  get mainPhotoUrl() { return this.createRestaurantForm.get('mainPhotoUrl') }

  submit() {
    this.create.emit({
      restaurant: new Restaurant({
        name: this.name?.value,
        description: this.description?.value,
        address: this.description?.value,
        city: this.city?.value,
        cp: this.cp?.value
      }),
      arrayImages: this.imagesList
    })

  }

  handleImageDrop(images: any): void {
    this.prepareFilesList(images);

  }

  onImageDropped(images: any): void {
    this.prepareFilesList(images);
  }

  prepareFilesList (files: Array<File>): void {
    if (this.imagesList.length < 3) {
      for (const item of files) {
        const reader = new FileReader();
        const imageWrap = {
          image: item,
          imagePath: '',
        }
        reader.readAsDataURL(item);
        reader.onloadend = () => {
          imageWrap.imagePath =  reader.result as string;
        };

        this.imagesList.push(imageWrap);
      }
    }


  }


}
