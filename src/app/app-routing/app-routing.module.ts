import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GallerysComponent } from '../component/gallerys/gallerys.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';
import { AddGalleryComponent } from '../component/add-gallery/add-gallery.component';
import { MyGalleryComponent } from '../component/my-gallery/my-gallery.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/all-galleries', canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  { path: 'all-galleries', canActivate: [AuthGuard], component: GallerysComponent },
  { path: 'login', canActivate: [GuestGuard], component: LoginComponent },
  { path: 'registar', component: RegisterComponent },
  { path: 'addGallery', canActivate: [AuthGuard], component: AddGalleryComponent},
  { path: 'myGallery', canActivate: [AuthGuard], component: MyGalleryComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
