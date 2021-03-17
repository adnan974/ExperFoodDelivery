import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';
import { RestorerComponent } from './restorer/restorer.component';

const routes: Routes = [
  {
    path: 'restorer',
    component: RestorerComponent, 
    children: [
      { path: 'home', component : HomeRestorerComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestorerRoutingModule { }
