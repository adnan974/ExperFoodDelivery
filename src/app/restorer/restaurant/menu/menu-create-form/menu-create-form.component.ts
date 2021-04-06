import { CreateMenuWrapperObject } from './../../../../shared/models/menu';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageWrapper } from 'src/app/shared/models/image-wrapper';
import { Router } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'efd-menu-create-form',
  templateUrl: './menu-create-form.component.html',
  styleUrls: ['./menu-create-form.component.scss']
})
export class MenuCreateFormComponent implements OnInit {
  createMenuForm!: FormGroup;
  loading: boolean = false;
  imagesList: Array<ImageWrapper> = new Array<ImageWrapper>();

  @Output() create: EventEmitter<CreateMenuWrapperObject> = new EventEmitter<CreateMenuWrapperObject>();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.createMenuForm = this.fb.group({
      'name': ['', [
        Validators.required,
      ]],
      'description': ['', [
        Validators.required,
      ]],
      'price': ['', [
        Validators.required,
      ]]
    });

  }

  get name(): AbstractControl | null { return this.createMenuForm.get('name'); }
  get description(): AbstractControl | null { return this.createMenuForm.get('description'); }
  get price(): AbstractControl | null { return this.createMenuForm.get('price'); }


  submit() {
    this.create.emit({
      menu: new Menu({
        name: this.name?.value,
        description: this.description?.value,
        price: this.price?.value
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

  prepareFilesList(files: Array<any>): void {
    for (const item of files) {
      const reader = new FileReader();
      let path;
      reader.readAsDataURL(item);
      reader.onloadend = () => {
        path = reader.result as string;
      };

      this.imagesList.push({
        image: item,
        imagePath: path,
      });
    }

  }

}
