import { Restaurant, CreateRestaurantWrapperObject } from './../../../shared/models/restaurant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';

// class ImageWrapper {
//   image !:File;
//   imagePath !: string;
// }

@Component({
  selector: 'efd-restaurant-add-form',
  templateUrl: './restaurant-add-form.component.html',
  styleUrls: ['./restaurant-add-form.component.scss']
})
export class RestaurantAddFormComponent implements OnInit {

  createRestaurantForm!: FormGroup;
  loading: boolean = false;
  imagesList: Array<ImageWrapper> = new Array<ImageWrapper>();

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
      'mainPhotoUrl': ''
     });

  }

  get name() { return this.createRestaurantForm.get('name') }
  get description() { return this.createRestaurantForm.get('description') }
  get address() { return this.createRestaurantForm.get('address') }
  get mainPhotoUrl() { return this.createRestaurantForm.get('mainPhotoUrl') }

  submit() {
    this.create.emit({
      restaurant : new Restaurant({
        name : this.name?.value,
        description : this.description?.value,
        address: this.description?.value
      }),
      arrayImages : this.imagesList
    })

   }

   handleImageDrop(images:any){
    this.prepareFilesList(images);

   }

   onImageDropped(images:any){
     console.log('image !', images)
    this.prepareFilesList(images);
   }

   prepareFilesList(files: Array<any>) {
    console.log('prepare image !', files)
    for (const item of files) {
      let imageW = new ImageWrapper();
      imageW.image = item;

      let reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onloadend = () => {
        imageW.imagePath = reader.result as string;
      };

      console.log('imageW !', imageW)
      this.imagesList.push(imageW);
      console.log('imageWList Wrapper!', this.imagesList)
    }

  }



}
