import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GallerysComponent } from '../component/gallerys/gallerys.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  { path: 'gallery', component: GallerysComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
