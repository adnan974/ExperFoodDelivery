import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListPageComponent } from './menu-list-page/menu-list-page.component';

const routes: Routes = [
 { path: '', component: MenuListPageComponent },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class MenuRoutingModule { }
