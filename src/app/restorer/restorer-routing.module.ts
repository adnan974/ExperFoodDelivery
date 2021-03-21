import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRestorerComponent } from './home-restorer/home-restorer.component';
import { RestorerTemplateComponent } from './restorer-template/restorer-template.component';

const routes: Routes = [
  {
    path: 'restorer',
    component: RestorerTemplateComponent,
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
