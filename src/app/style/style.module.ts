import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';

import { LazyLoadImageModule} from 'ng-lazyload-image';


const AngularMaterialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatStepperModule,
  MatSnackBarModule,
  FlexLayoutModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatBadgeModule,
  MatRadioModule,
  LazyLoadImageModule
]


@NgModule({
  declarations: [],
  imports: [
    ...AngularMaterialModules

  ],
  exports : [
    ...AngularMaterialModules
  ],
})
export class StyleModule { }
