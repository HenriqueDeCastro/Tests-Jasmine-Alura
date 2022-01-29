import { PhotoListComponent } from './modules/photo-list/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: '**',
    redirectTo : 'photos'
  },
  {
    path: ' ',
    redirectTo: 'photos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
